<template>
  <!-- This is a logical component with no template -->
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted, shallowRef } from 'vue'
import { useCesiumStore } from '@/stores/cesium'
import { useGISStore } from '@/stores/gis'
import { DrawTool } from '@/cesium/gis/tools/DrawTool'
import { PointGraphic } from '@/cesium/gis/graphics/PointGraphic'
import { LineGraphic } from '@/cesium/gis/graphics/LineGraphic'
import { CircleGraphic } from '@/cesium/gis/graphics/CircleGraphic'
import { RectangleGraphic } from '@/cesium/gis/graphics/RectangleGraphic'
import { PolygonGraphic } from '@/cesium/gis/graphics/PolygonGraphic'
import type { DrawToolType } from '@/types/draw'
import type { Feature } from '@/types/feature'

declare const Cesium: any

const cesiumStore = useCesiumStore()
const gisStore = useGISStore()

// Current active tool instance
const currentTool = shallowRef<DrawTool | null>(null)

// Selection event handler
let selectionHandler: any = null

// Track Ctrl key state
let isCtrlPressed = false

// ========== Drag State ==========
let isDragging = false
let dragFeatureId: string | null = null
let dragStartPosition: any = null  // Cartesian3

onMounted(() => {
  // Set viewer in GIS store
  if (cesiumStore.viewer) {
    gisStore.setViewer(cesiumStore.viewer)
    setupSelectionHandler()
  }
})

onUnmounted(() => {
  cleanup()
})

/**
 * Setup map click handler for feature selection and drag
 */
function setupSelectionHandler() {
  const viewer = cesiumStore.viewer
  if (!viewer) return

  // Track Ctrl/Meta key state via DOM events
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Control' || e.key === 'Meta') {
      isCtrlPressed = true
    }
  }
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Control' || e.key === 'Meta') {
      isCtrlPressed = false
    }
  }
  document.addEventListener('keydown', handleKeyDown)
  document.addEventListener('keyup', handleKeyUp)

  selectionHandler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

  // Store cleanup functions
  ;(selectionHandler as any)._keyboardCleanup = () => {
    document.removeEventListener('keydown', handleKeyDown)
    document.removeEventListener('keyup', handleKeyUp)
  }

  // LEFT_DOWN for drag start
  selectionHandler.setInputAction((event: any) => {
    // Skip when drawing tool is active
    if (gisStore.isDrawing || gisStore.toolType) return

    const pickedObject = viewer.scene.pick(event.position)

    if (Cesium.defined(pickedObject) && pickedObject.id) {
      const featureId = getFeatureIdFromEntity(pickedObject.id)

      // Only start drag if clicking on a selected feature
      if (featureId && gisStore.selectedFeatureIds.has(featureId)) {
        isDragging = true
        dragFeatureId = featureId
        dragStartPosition = viewer.scene.pickPosition(event.position)

        // Disable camera controls during drag
        viewer.scene.screenSpaceCameraController.enableRotate = false
        viewer.scene.screenSpaceCameraController.enableTranslate = false
        viewer.scene.screenSpaceCameraController.enableZoom = false
        viewer.scene.screenSpaceCameraController.enableTilt = false
        viewer.scene.screenSpaceCameraController.enableLook = false
      }
    }
  }, Cesium.ScreenSpaceEventType.LEFT_DOWN)

  // MOUSE_MOVE for drag
  selectionHandler.setInputAction((event: any) => {
    if (!isDragging || !dragFeatureId || !dragStartPosition) return

    const currentPosition = viewer.scene.pickPosition(event.endPosition)
    if (!Cesium.defined(currentPosition)) return

    // Calculate offset
    const offset = Cesium.Cartesian3.subtract(
      currentPosition,
      dragStartPosition,
      new Cesium.Cartesian3()
    )

    // Move all selected features
    gisStore.selectedFeatureIds.forEach(featureId => {
      const graphic = gisStore.graphics.get(featureId)
      if (graphic && graphic.move) {
        graphic.move(offset)
      }
    })

    // Update drag start position for next move
    dragStartPosition = currentPosition
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

  // LEFT_UP for drag end and selection
  selectionHandler.setInputAction((event: any) => {
    const wasDragging = isDragging

    // Re-enable camera controls
    viewer.scene.screenSpaceCameraController.enableRotate = true
    viewer.scene.screenSpaceCameraController.enableTranslate = true
    viewer.scene.screenSpaceCameraController.enableZoom = true
    viewer.scene.screenSpaceCameraController.enableTilt = true
    viewer.scene.screenSpaceCameraController.enableLook = true

    if (wasDragging) {
      // Update feature geometry in store after drag
      gisStore.selectedFeatureIds.forEach(featureId => {
        const graphic = gisStore.graphics.get(featureId)
        const feature = gisStore.features.get(featureId)
        if (graphic && feature) {
          // Update feature geometry from graphic positions
          updateFeatureGeometry(featureId, graphic)
        }
      })

      // Reset drag state
      isDragging = false
      dragFeatureId = null
      dragStartPosition = null
      return
    }

    // If not dragging, handle as selection click
    // Skip selection when drawing tool is active
    if (gisStore.isDrawing || gisStore.toolType) return

    const pickedObject = viewer.scene.pick(event.position)

    if (Cesium.defined(pickedObject) && pickedObject.id) {
      const featureId = getFeatureIdFromEntity(pickedObject.id)

      if (featureId && gisStore.features.has(featureId)) {
        if (isCtrlPressed) {
          // Ctrl+Click: Toggle selection
          gisStore.toggleSelection(featureId)
        } else {
          // Normal click: Single selection
          gisStore.selectFeature(featureId, false)
        }

        // Apply highlight to selected features
        applySelectionHighlights()
      }
    } else {
      // Click on empty space - deselect all (unless Ctrl is held)
      if (!isCtrlPressed) {
        gisStore.deselectFeature()
        applySelectionHighlights()
      }
    }

    // Reset drag state
    isDragging = false
    dragFeatureId = null
    dragStartPosition = null
  }, Cesium.ScreenSpaceEventType.LEFT_UP)
}

/**
 * Extract featureId from entity
 */
function getFeatureIdFromEntity(entity: any): string | null {
  let featureId: string | null = null

  if (entity.properties && entity.properties.featureId) {
    const prop = entity.properties.featureId
    featureId = prop.getValue ? prop.getValue(Cesium.JulianDate.now()) : prop
  }

  // Fallback: try entity.id
  if (!featureId && typeof entity.id === 'string') {
    featureId = entity.id
  }

  return featureId
}

/**
 * Update feature geometry from graphic positions after move
 */
function updateFeatureGeometry(featureId: string, graphic: any) {
  const feature = gisStore.features.get(featureId)
  if (!feature) return

  const positions = graphic.getPositions()
  if (!positions || positions.length === 0) return

  // Convert positions to GeoJSON coordinates
  const coordinates = positions.map((pos: any) => {
    const cartographic = Cesium.Cartographic.fromCartesian(pos)
    return [
      Cesium.Math.toDegrees(cartographic.longitude),
      Cesium.Math.toDegrees(cartographic.latitude),
      cartographic.height
    ]
  })

  // Update geometry based on feature type
  switch (feature.type) {
    case 'point':
      feature.geometry.coordinates = coordinates[0]
      break
    case 'line':
      feature.geometry.coordinates = coordinates
      break
    case 'polygon':
      // Close polygon ring
      feature.geometry.coordinates = [[...coordinates, coordinates[0]]]
      break
    case 'circle':
      // Circle: store center and recalculate radius
      feature.geometry.coordinates = coordinates[0]
      if (graphic.getRadius) {
        feature.properties = feature.properties || {}
        feature.properties.radius = graphic.getRadius()
      }
      break
    case 'rectangle':
      // Rectangle: store as polygon
      const sw = coordinates[0]
      const ne = coordinates[1]
      feature.geometry.coordinates = [[
        [sw[0], ne[1]], // NW
        [ne[0], ne[1]], // NE
        [ne[0], sw[1]], // SE
        [sw[0], sw[1]], // SW
        [sw[0], ne[1]]  // Close
      ]]
      break
  }

  // Update timestamp
  gisStore.updateFeature(featureId, { updatedAt: new Date() })
}

/**
 * Apply highlight effect to all selected features
 */
function applySelectionHighlights() {
  const selectedIds = gisStore.selectedFeatureIds

  // Iterate through all graphics and update highlight state
  gisStore.graphics.forEach((graphic, featureId) => {
    const shouldHighlight = selectedIds.has(featureId)
    if (graphic.setHighlight) {
      graphic.setHighlight(shouldHighlight)
    }
  })
}

// Watch for selection changes (from list or other sources)
watch(
  () => [...gisStore.selectedFeatureIds],
  () => {
    applySelectionHighlights()
  },
  { deep: true }
)

// Watch for tool type changes
watch(() => gisStore.toolType, (newToolType, oldToolType) => {
  if (oldToolType) {
    deactivateTool()
  }

  if (newToolType && isDrawTool(newToolType)) {
    activateTool(newToolType as DrawToolType)
  }
})

/**
 * Check if tool type is a drawing tool
 */
function isDrawTool(toolType: string | null): boolean {
  if (!toolType) return false
  return ['point', 'line', 'circle', 'rectangle', 'polygon'].includes(toolType)
}

/**
 * Activate drawing tool
 */
function activateTool(toolType: DrawToolType) {
  const viewer = cesiumStore.viewer
  if (!viewer) {
    console.warn('Cesium viewer not ready')
    return
  }

  try {
    // Create new tool instance
    const tool = new DrawTool(viewer, {
      geometryType: toolType as any, // toolType is 'point' | 'line' | 'circle' | 'rectangle' | 'polygon'
      onComplete: (feature: Feature) => {
        // Convert Feature to Graphic
        const graphic = createGraphicFromFeature(feature, viewer)
        if (!graphic) {
          console.error('Failed to create graphic from feature:', feature)
          return
        }

        // Register feature and graphic to GISStore
        gisStore.addFeature(feature, graphic)

        // For MVP: Keep tool active for easier use (user can click away to deactivate)
        // Future: Add toggle for continuous mode in UI
        // if (!gisStore.continuousMode) {
        //   gisStore.deactivateTool()
        // }
      },
      onCancel: () => {
        // User cancelled drawing
        console.log('Drawing cancelled')
      }
    })

    // Activate the tool
    tool.activate()

    // Store tool instance
    currentTool.value = tool

    // Update store state
    gisStore.startDrawing()
  } catch (error) {
    console.error('Failed to activate drawing tool:', error)
  }
}

/**
 * Deactivate current tool
 */
function deactivateTool() {
  if (currentTool.value) {
    try {
      currentTool.value.deactivate()
      currentTool.value = null
      gisStore.cancelDrawing()
    } catch (error) {
      console.error('Failed to deactivate tool:', error)
    }
  }
}

/**
 * Create Graphic instance from Feature
 */
function createGraphicFromFeature(feature: Feature, viewer: any) {
  const { geometry, style, name, properties } = feature

  // Convert coordinates to Cartesian3
  const positions = convertCoordinatesToCartesian3(geometry)
  if (!positions || positions.length === 0) {
    console.error('Failed to convert geometry coordinates:', geometry)
    return null
  }

  // Create appropriate Graphic based on type
  let graphic
  try {
    switch (feature.type) {
      case 'point':
        graphic = new PointGraphic(viewer, {
          name,
          style,
          label: name
        })
        break
      case 'line':
        graphic = new LineGraphic(viewer, {
          name,
          style
        })
        break
      case 'circle': {
        // Circle needs center and radius
        if (!properties?.radius) {
          console.error('Circle missing radius property:', feature)
          return null
        }
        // CircleGraphic.create() expects [center, edgePoint]
        // Calculate edge point from center + radius
        const centerPos = positions[0]
        const centerCarto = Cesium.Cartographic.fromCartesian(centerPos)
        const edgePos = Cesium.Cartesian3.fromRadians(
          centerCarto.longitude + properties.radius / 6378137, // approximate
          centerCarto.latitude,
          centerCarto.height
        )
        const circlePositions = [centerPos, edgePos]

        graphic = new CircleGraphic(viewer, {
          name,
          style
        })
        graphic.create(circlePositions)
        graphic.bindFeatureId(feature.id)
        console.log(`Created circle graphic:`, feature.id, circlePositions.length, 'positions')
        return graphic
      }
      case 'rectangle': {
        // Rectangle is stored as Polygon with 5 positions (4 corners + closing point)
        // RectangleGraphic.create() expects [corner1, corner2] (opposite corners)
        if (positions.length < 4) {
          console.error('Rectangle needs at least 4 corner positions:', positions.length)
          return null
        }
        // Use corner 0 (SW) and corner 2 (NE) as opposite corners
        const rectanglePositions = [positions[0], positions[2]]

        graphic = new RectangleGraphic(viewer, {
          name,
          style
        })
        graphic.create(rectanglePositions)
        graphic.bindFeatureId(feature.id)
        console.log(`Created rectangle graphic:`, feature.id, rectanglePositions.length, 'positions')
        return graphic
      }
      case 'polygon':
        graphic = new PolygonGraphic(viewer, {
          name,
          style
        })
        break
      default:
        console.error('Unknown feature type:', feature.type)
        return null
    }

    // Create the graphic with positions
    graphic.create(positions)

    // Bind featureId to graphic and its entities for selection
    graphic.bindFeatureId(feature.id)

    console.log(`Created ${feature.type} graphic:`, feature.id, positions.length, 'positions')
    return graphic
  } catch (error) {
    console.error(`Error creating ${feature.type} graphic:`, error, feature)
    return null
  }
}

/**
 * Convert Feature geometry coordinates to Cesium.Cartesian3 array
 */
function convertCoordinatesToCartesian3(geometry: any): any[] {
  if (!geometry || !geometry.coordinates) {
    console.error('Invalid geometry:', geometry)
    return []
  }

  const coords = geometry.coordinates

  try {
    switch (geometry.type) {
      case 'Point':
        // Single coordinate [lon, lat, height?]
        if (!Array.isArray(coords) || coords.length < 2) {
          console.error('Invalid Point coordinates:', coords)
          return []
        }
        return [Cesium.Cartesian3.fromDegrees(coords[0], coords[1], coords[2] || 0)]

      case 'LineString':
        // Array of coordinates [[lon, lat, height?], ...]
        if (!Array.isArray(coords)) {
          console.error('Invalid LineString coordinates:', coords)
          return []
        }
        return coords.map((c: number[]) => {
          if (!Array.isArray(c) || c.length < 2) {
            console.warn('Invalid coordinate in LineString:', c)
            return null
          }
          return Cesium.Cartesian3.fromDegrees(c[0], c[1], c[2] || 0)
        }).filter((p: any) => p !== null)

      case 'Polygon':
        // Array of rings, use first ring (exterior)
        if (!Array.isArray(coords) || coords.length === 0) {
          console.error('Invalid Polygon coordinates:', coords)
          return []
        }
        const ring = coords[0]
        if (!Array.isArray(ring)) {
          console.error('Invalid Polygon ring:', ring)
          return []
        }
        return ring.map((c: number[]) => {
          if (!Array.isArray(c) || c.length < 2) {
            console.warn('Invalid coordinate in Polygon:', c)
            return null
          }
          return Cesium.Cartesian3.fromDegrees(c[0], c[1], c[2] || 0)
        }).filter((p: any) => p !== null)

      default:
        console.warn('Unsupported geometry type:', geometry.type)
        return []
    }
  } catch (error) {
    console.error('Error converting coordinates:', error, geometry)
    return []
  }
}

/**
 * Cleanup on unmount
 */
function cleanup() {
  deactivateTool()

  // Destroy selection handler and keyboard listeners
  if (selectionHandler) {
    if ((selectionHandler as any)._keyboardCleanup) {
      (selectionHandler as any)._keyboardCleanup()
    }
    selectionHandler.destroy()
    selectionHandler = null
  }
}
</script>
