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
   * Export all features as GeoJSON
   * @returns GeoJSON FeatureCollection as string
   */
  function exportGeoJSON(): string {
    const featureCollection = {
      type: 'FeatureCollection',
      features: Array.from(features.value.values()).map(feature => ({
        type: 'Feature',
        id: feature.id,
        geometry: feature.geometry,
        properties: {
          name: feature.name,
          type: feature.type,
          ...feature.properties,
          style: feature.style,
          createdAt: feature.createdAt?.toISOString()
        }
      }))
    }

    return JSON.stringify(featureCollection, null, 2)
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
