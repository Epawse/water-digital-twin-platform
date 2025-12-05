/**
 * Unified GIS Store
 *
 * 统一的 GIS 状态管理，整合：
 * - 绘制工具 (Draw)
 * - 要素管理 (Feature)
 * - 测量工具 (Measure)
 *
 * 设计目标：
 * 1. 统一管理所有 GIS 交互工具
 * 2. 统一管理要素和图形的映射关系
 * 3. 提供向后兼容的 API（兼容现有 useMeasureStore）
 */

import { defineStore } from 'pinia'
import { ref, computed, shallowRef } from 'vue'
import type * as Cesium from 'cesium'

// Types
import type { BaseTool, ToolType } from '@/cesium/gis/core/BaseTool'
import type { BaseGraphic } from '@/cesium/gis/core/BaseGraphic'
import type { DrawMode, DrawToolType } from '@/types/draw'
import type { Feature, FeatureGraphicMap, FeatureFilter } from '@/types/feature'
import type { MeasureToolType, Measurement } from '@/types/measure'

// Note: GISState interface removed as it's not currently used
// State is managed through individual refs below

export const useGISStore = defineStore('gis', () => {
  // ========== Core State ==========

  /** Cesium Viewer instance */
  const viewer = shallowRef<Cesium.Viewer | null>(null)

  /** Current active tool */
  const currentTool = shallowRef<BaseTool | null>(null)

  /** Current tool type */
  const toolType = ref<ToolType | null>(null)

  /** Current drawing/editing mode */
  const mode = ref<DrawMode>('none')

  // ========== Feature Management ==========

  /** All features (id -> Feature) */
  const features = ref<Map<string, Feature>>(new Map())

  /** All graphics (featureId -> BaseGraphic) */
  const graphics = ref<Map<string, BaseGraphic>>(new Map())

  /** Feature-Graphic mappings */
  const featureGraphicMaps = ref<Map<string, FeatureGraphicMap>>(new Map())

  /** Selected feature IDs */
  const selectedFeatureIds = ref<Set<string>>(new Set())

  /** Highlighted feature ID (hover) */
  const highlightedFeatureId = ref<string | null>(null)

  // ========== Measurement (Backward Compatibility) ==========

  /** Measurement history */
  const measurements = ref<Measurement[]>([])

  // ========== Settings ==========

  /** Enable snapping */
  const snapEnabled = ref(true)

  /** Snap tolerance (pixels) */
  const snapTolerance = ref(10)

  /** Show tips */
  const showTips = ref(true)

  /** Continuous drawing mode */
  const continuousMode = ref(false)

  // ========== Computed Properties ==========

  /** Is any tool active */
  const isActive = computed(() => currentTool.value !== null)

  /** Is drawing */
  const isDrawing = computed(() => mode.value === 'drawing')

  /** Is editing */
  const isEditing = computed(() => mode.value === 'editing')

  /** Feature count */
  const featureCount = computed(() => features.value.size)

  /** Selected feature count */
  const selectedCount = computed(() => selectedFeatureIds.value.size)

  /** All features as array */
  const featuresArray = computed(() => Array.from(features.value.values()))

  /** Selected features as array */
  const selectedFeatures = computed(() => {
    return Array.from(selectedFeatureIds.value)
      .map(id => features.value.get(id))
      .filter(Boolean) as Feature[]
  })

  /** Measurement count (for backward compatibility) */
  const measurementCount = computed(() => measurements.value.length)

  /** Active tool (backward compatibility alias for toolType) */
  const activeTool = computed(() => toolType.value)

  // ========== Tool Management Actions ==========

  /**
   * Set Cesium Viewer
   */
  function setViewer(cesiumViewer: Cesium.Viewer) {
    viewer.value = cesiumViewer
  }

  /**
   * Activate a tool
   * @param tool - Tool instance
   */
  function activateTool(tool: BaseTool) {
    // Deactivate current tool
    if (currentTool.value) {
      currentTool.value.deactivate()
    }

    // Activate new tool
    currentTool.value = tool
    toolType.value = tool.getType()
    mode.value = 'drawing'

    tool.activate()
  }

  /**
   * Deactivate current tool
   */
  function deactivateTool() {
    if (currentTool.value) {
      currentTool.value.deactivate()
      currentTool.value = null
    }
    // Always reset toolType and mode, even if no tool is active
    toolType.value = null
    mode.value = 'none'
  }

  /**
   * Set tool by type (backward compatibility)
   * @param type - Tool type or null
   */
  function setTool(type: ToolType | DrawToolType | MeasureToolType | null) {
    if (type === null) {
      deactivateTool()
    } else {
      toolType.value = type as ToolType
      // Note: Actual tool instantiation happens in the component layer
      // This is just for state tracking
    }
  }

  // ========== Feature Management Actions ==========

  /**
   * Add a feature
   * @param feature - Feature data
   * @param graphic - Associated graphic
   */
  function addFeature(feature: Feature, graphic: BaseGraphic) {
    features.value.set(feature.id, feature)
    graphics.value.set(feature.id, graphic)

    const map: FeatureGraphicMap = {
      featureId: feature.id,
      feature: feature,
      graphic: graphic
    }
    featureGraphicMaps.value.set(feature.id, map)
  }

  /**
   * Remove a feature
   * @param featureId - Feature ID
   */
  function removeFeature(featureId: string) {
    const graphic = graphics.value.get(featureId)
    if (graphic) {
      graphic.destroy()
      graphics.value.delete(featureId)
    }

    features.value.delete(featureId)
    featureGraphicMaps.value.delete(featureId)
    selectedFeatureIds.value.delete(featureId)

    if (highlightedFeatureId.value === featureId) {
      highlightedFeatureId.value = null
    }
  }

  /**
   * Update feature
   * @param featureId - Feature ID
   * @param updates - Partial feature updates
   */
  function updateFeature(featureId: string, updates: Partial<Feature>) {
    const feature = features.value.get(featureId)
    if (feature) {
      Object.assign(feature, updates)
      feature.updatedAt = new Date()
    }
  }

  /**
   * Get feature by ID
   * @param featureId - Feature ID
   */
  function getFeature(featureId: string): Feature | undefined {
    return features.value.get(featureId)
  }

  /**
   * Get graphic by feature ID
   * @param featureId - Feature ID
   */
  function getGraphic(featureId: string): BaseGraphic | undefined {
    return graphics.value.get(featureId)
  }

  /**
   * Clear all features
   */
  function clearFeatures() {
    graphics.value.forEach(graphic => graphic.destroy())

    features.value.clear()
    graphics.value.clear()
    featureGraphicMaps.value.clear()
    selectedFeatureIds.value.clear()
    highlightedFeatureId.value = null
  }

  /**
   * Filter features
   * @param filter - Filter conditions
   */
  function filterFeatures(filter: FeatureFilter): Feature[] {
    let result = Array.from(features.value.values())

    if (filter.types && filter.types.length > 0) {
      result = result.filter(f => filter.types!.includes(f.type))
    }

    if (filter.visible !== undefined) {
      result = result.filter(f => f.visible === filter.visible)
    }

    if (filter.createdAfter) {
      result = result.filter(f => f.createdAt >= filter.createdAfter!)
    }

    if (filter.createdBefore) {
      result = result.filter(f => f.createdAt <= filter.createdBefore!)
    }

    if (filter.nameContains) {
      const query = filter.nameContains.toLowerCase()
      result = result.filter(f => f.name.toLowerCase().includes(query))
    }

    return result
  }

  // ========== Selection Actions ==========

  /**
   * Select feature(s)
   * @param featureIds - Feature ID(s) to select
   * @param multi - Allow multi-selection
   */
  function selectFeature(featureIds: string | string[], multi: boolean = false) {
    const ids = Array.isArray(featureIds) ? featureIds : [featureIds]

    if (!multi) {
      selectedFeatureIds.value.clear()
    }

    ids.forEach(id => {
      if (features.value.has(id)) {
        selectedFeatureIds.value.add(id)
      }
    })
  }

  /**
   * Deselect feature(s)
   * @param featureIds - Feature ID(s) to deselect (if not provided, deselect all)
   */
  function deselectFeature(featureIds?: string | string[]) {
    if (!featureIds) {
      selectedFeatureIds.value.clear()
      return
    }

    const ids = Array.isArray(featureIds) ? featureIds : [featureIds]
    ids.forEach(id => selectedFeatureIds.value.delete(id))
  }

  /**
   * Toggle feature selection
   * @param featureId - Feature ID
   */
  function toggleSelection(featureId: string) {
    if (selectedFeatureIds.value.has(featureId)) {
      selectedFeatureIds.value.delete(featureId)
    } else if (features.value.has(featureId)) {
      selectedFeatureIds.value.add(featureId)
    }
  }

  /**
   * Highlight feature (hover)
   * @param featureId - Feature ID or null
   */
  function highlightFeature(featureId: string | null) {
    highlightedFeatureId.value = featureId
  }

  // ========== Measurement Actions (Backward Compatibility) ==========

  /**
   * Add measurement
   * @param measurement - Measurement data
   */
  function addMeasurement(measurement: Measurement) {
    measurements.value.push(measurement)
  }

  /**
   * Remove measurement
   * @param id - Measurement ID
   */
  function removeMeasurement(id: string) {
    const index = measurements.value.findIndex(m => m.id === id)
    if (index !== -1) {
      measurements.value.splice(index, 1)
    }
  }

  /**
   * Clear all measurements
   */
  function clearMeasurements() {
    measurements.value = []
  }

  /**
   * Clear all (backward compatibility alias for clearMeasurements)
   */
  function clearAll() {
    clearMeasurements()
  }

  // ========== Mode Actions ==========

  /**
   * Start drawing
   */
  function startDrawing() {
    mode.value = 'drawing'
  }

  /**
   * Finish drawing
   */
  function finishDrawing() {
    if (!continuousMode.value) {
      mode.value = 'none'
    }
    // In continuous mode, stay in drawing mode
  }

  /**
   * Cancel drawing
   */
  function cancelDrawing() {
    mode.value = 'none'
  }

  /**
   * Enter edit mode
   * @param featureId - Feature ID to edit
   */
  function enterEditMode(featureId: string) {
    if (features.value.has(featureId)) {
      mode.value = 'editing'
      selectFeature(featureId)
    }
  }

  /**
   * Exit edit mode
   */
  function exitEditMode() {
    mode.value = 'none'
  }

  // ========== Import/Export Actions ==========

  /**
   * Convert internal feature to GeoJSON geometry
   */
  function featureToGeoJSONGeometry(feature: Feature): { type: string; coordinates: any } | null {
    switch (feature.type) {
      case 'point':
        return {
          type: 'Point',
          coordinates: [feature.position.longitude, feature.position.latitude, (feature.position as any).height || 0]
        }
      case 'line':
      case 'distance':
        const lineCoords = feature.type === 'line'
          ? feature.vertices.map(v => [v.longitude, v.latitude, (v as any).height || 0])
          : [[feature.startPoint.longitude, feature.startPoint.latitude], [feature.endPoint.longitude, feature.endPoint.latitude]]
        return {
          type: 'LineString',
          coordinates: lineCoords
        }
      case 'polygon':
      case 'area':
        // GeoJSON polygon requires first and last point to be the same
        const polyCoords = feature.vertices.map(v => [v.longitude, v.latitude, (v as any).height || 0])
        if (polyCoords.length > 0) {
          polyCoords.push(polyCoords[0]) // Close the ring
        }
        return {
          type: 'Polygon',
          coordinates: [polyCoords]
        }
      case 'circle':
        // GeoJSON doesn't have a native circle type, export as Point with radius in properties
        return {
          type: 'Point',
          coordinates: [feature.center.longitude, feature.center.latitude, (feature.center as any).height || 0]
        }
      case 'rectangle':
        // Export rectangle as Polygon
        const sw = feature.southwest
        const ne = feature.northeast
        const rectCoords = [
          [sw.longitude, sw.latitude],
          [ne.longitude, sw.latitude],
          [ne.longitude, ne.latitude],
          [sw.longitude, ne.latitude],
          [sw.longitude, sw.latitude] // Close the ring
        ]
        return {
          type: 'Polygon',
          coordinates: [rectCoords]
        }
      default:
        return null
    }
  }

  /**
   * Export all features as GeoJSON
   * @param selectedOnly - Only export selected features
   * @returns GeoJSON FeatureCollection as string
   */
  function exportGeoJSON(selectedOnly = false): string {
    const featuresToExport = selectedOnly
      ? Array.from(features.value.values()).filter(f => selectedFeatureIds.value.has(f.id))
      : Array.from(features.value.values())

    const geojsonFeatures = featuresToExport.map(feature => {
      const geometry = featureToGeoJSONGeometry(feature)
      return {
        type: 'Feature',
        id: feature.id,
        geometry,
        properties: {
          name: feature.name,
          featureType: feature.type, // Use featureType to avoid conflict with GeoJSON type
          description: feature.description,
          ...feature.properties,
          style: feature.style,
          createdAt: feature.createdAt?.toISOString(),
          // Special properties for circle/rectangle
          ...(feature.type === 'circle' ? { radius: feature.radius, area: feature.area } : {}),
          ...(feature.type === 'rectangle' ? { width: feature.width, height: feature.height, area: feature.area } : {}),
          ...(feature.type === 'line' ? { length: feature.length } : {}),
          ...(feature.type === 'polygon' ? { area: feature.area, perimeter: feature.perimeter } : {})
        }
      }
    })

    const featureCollection = {
      type: 'FeatureCollection',
      features: geojsonFeatures,
      metadata: {
        exportedAt: new Date().toISOString(),
        featureCount: geojsonFeatures.length,
        source: 'water-digital-twin-platform'
      }
    }

    return JSON.stringify(featureCollection, null, 2)
  }

  /**
   * Import features from GeoJSON string
   * @param geojsonStr - GeoJSON string
   * @returns Number of features imported
   */
  function importGeoJSON(geojsonStr: string): { success: number; errors: string[] } {
    const errors: string[] = []
    let successCount = 0

    try {
      const geojson = JSON.parse(geojsonStr)

      if (geojson.type !== 'FeatureCollection' && geojson.type !== 'Feature') {
        errors.push('Invalid GeoJSON: must be FeatureCollection or Feature')
        return { success: 0, errors }
      }

      const featuresToImport = geojson.type === 'FeatureCollection'
        ? geojson.features
        : [geojson]

      for (const geoFeature of featuresToImport) {
        try {
          const feature = geoJSONToFeature(geoFeature)
          if (feature) {
            features.value.set(feature.id, feature)
            successCount++
          }
        } catch (err) {
          errors.push(`Failed to import feature: ${(err as Error).message}`)
        }
      }
    } catch (err) {
      errors.push(`Invalid JSON: ${(err as Error).message}`)
    }

    return { success: successCount, errors }
  }

  /**
   * Convert GeoJSON feature to internal Feature
   */
  function geoJSONToFeature(geoFeature: any): Feature | null {
    const { geometry, properties = {} } = geoFeature
    if (!geometry) return null

    const id = geoFeature.id || `imported_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const now = new Date()
    const baseProps = {
      id,
      name: properties.name || `导入要素 ${id.substring(0, 8)}`,
      description: properties.description,
      createdAt: properties.createdAt ? new Date(properties.createdAt) : now,
      updatedAt: now,
      style: properties.style || {},
      properties: { ...properties },
      visible: true
    }

    // Determine feature type from properties or geometry
    const featureType = properties.featureType || properties.type

    switch (geometry.type) {
      case 'Point':
        const [pLng, pLat, pHeight = 0] = geometry.coordinates
        // Check if it's a circle (has radius property)
        if (featureType === 'circle' || properties.radius) {
          return {
            ...baseProps,
            type: 'circle',
            center: { longitude: pLng, latitude: pLat, height: pHeight },
            radius: properties.radius || 100,
            area: properties.area || Math.PI * Math.pow(properties.radius || 100, 2)
          } as any
        }
        return {
          ...baseProps,
          type: 'point',
          position: { longitude: pLng, latitude: pLat, height: pHeight },
          icon: properties.icon,
          label: properties.label
        } as any

      case 'LineString':
        const lineVertices = geometry.coordinates.map((coord: number[]) => ({
          longitude: coord[0],
          latitude: coord[1],
          height: coord[2] || 0
        }))
        return {
          ...baseProps,
          type: 'line',
          vertices: lineVertices,
          length: properties.length || 0,
          lineType: 'solid'
        } as any

      case 'Polygon':
        const ring = geometry.coordinates[0] || []
        // Remove closing point if present
        const polyVertices = ring.slice(0, -1).map((coord: number[]) => ({
          longitude: coord[0],
          latitude: coord[1],
          height: coord[2] || 0
        }))

        // Check if it's a rectangle
        if (featureType === 'rectangle' || (polyVertices.length === 4 && properties.width && properties.height)) {
          // Find southwest and northeast
          const lngs = polyVertices.map((v: any) => v.longitude)
          const lats = polyVertices.map((v: any) => v.latitude)
          return {
            ...baseProps,
            type: 'rectangle',
            southwest: { longitude: Math.min(...lngs), latitude: Math.min(...lats) },
            northeast: { longitude: Math.max(...lngs), latitude: Math.max(...lats) },
            width: properties.width || 0,
            height: properties.height || 0,
            area: properties.area || 0
          } as any
        }

        return {
          ...baseProps,
          type: 'polygon',
          vertices: polyVertices,
          area: properties.area || 0,
          perimeter: properties.perimeter
        } as any

      default:
        console.warn(`Unsupported geometry type: ${geometry.type}`)
        return null
    }
  }

  // ========== Settings Actions ==========

  /**
   * Set snap enabled
   * @param enabled - Enable snapping
   */
  function setSnapEnabled(enabled: boolean) {
    snapEnabled.value = enabled
  }

  /**
   * Set snap tolerance
   * @param tolerance - Snap tolerance in pixels
   */
  function setSnapTolerance(tolerance: number) {
    snapTolerance.value = Math.max(5, Math.min(20, tolerance))
  }

  /**
   * Set show tips
   * @param show - Show tips
   */
  function setShowTips(show: boolean) {
    showTips.value = show
  }

  /**
   * Set continuous mode
   * @param continuous - Enable continuous drawing
   */
  function setContinuousMode(continuous: boolean) {
    continuousMode.value = continuous
  }

  // ========== Reset Actions ==========

  /**
   * Reset all state
   */
  function reset() {
    deactivateTool()
    clearFeatures()
    clearMeasurements()
    mode.value = 'none'
  }

  /**
   * Reset drawing state only
   */
  function resetDrawing() {
    mode.value = 'none'
  }

  return {
    // ========== State ==========
    viewer,
    currentTool,
    toolType,
    mode,
    features,
    graphics,
    selectedFeatureIds,
    highlightedFeatureId,
    measurements,
    snapEnabled,
    snapTolerance,
    showTips,
    continuousMode,

    // ========== Computed ==========
    isActive,
    isDrawing,
    isEditing,
    featureCount,
    selectedCount,
    featuresArray,
    selectedFeatures,
    measurementCount,
    activeTool,

    // ========== Tool Management ==========
    setViewer,
    activateTool,
    deactivateTool,
    setTool,

    // ========== Feature Management ==========
    addFeature,
    removeFeature,
    updateFeature,
    getFeature,
    getGraphic,
    clearFeatures,
    filterFeatures,

    // ========== Selection ==========
    selectFeature,
    deselectFeature,
    toggleSelection,
    highlightFeature,

    // ========== Measurement (Backward Compatibility) ==========
    addMeasurement,
    removeMeasurement,
    clearMeasurements,
    clearAll,

    // ========== Mode ==========
    startDrawing,
    finishDrawing,
    cancelDrawing,
    enterEditMode,
    exitEditMode,

    // ========== Settings ==========
    setSnapEnabled,
    setSnapTolerance,
    setShowTips,
    setContinuousMode,

    // ========== Import/Export ==========
    exportGeoJSON,
    importGeoJSON,

    // ========== Reset ==========
    reset,
    resetDrawing
  }
})

/**
 * Backward compatibility alias
 * Use useGISStore() instead for new code
 */
export const useMeasureStore = useGISStore
