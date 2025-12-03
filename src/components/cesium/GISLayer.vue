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

onMounted(() => {
  // Set viewer in GIS store
  if (cesiumStore.viewer) {
    gisStore.setViewer(cesiumStore.viewer)
  }
})

onUnmounted(() => {
  cleanup()
})

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

        // If not in continuous mode, deactivate tool
        if (!gisStore.continuousMode) {
          gisStore.deactivateTool()
        }
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
  const { geometry, style, name } = feature

  // Convert coordinates to Cartesian3
  const positions = convertCoordinatesToCartesian3(geometry)
  if (!positions || positions.length === 0) {
    console.error('Invalid geometry coordinates:', geometry)
    return null
  }

  // Create appropriate Graphic based on type
  let graphic
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
    case 'circle':
      graphic = new CircleGraphic(viewer, {
        name,
        style
      })
      break
    case 'rectangle':
      graphic = new RectangleGraphic(viewer, {
        name,
        style
      })
      break
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
  return graphic
}

/**
 * Convert Feature geometry coordinates to Cesium.Cartesian3 array
 */
function convertCoordinatesToCartesian3(geometry: any): any[] {
  if (!geometry || !geometry.coordinates) return []

  const coords = geometry.coordinates

  switch (geometry.type) {
    case 'Point':
      // Single coordinate [lon, lat, height?]
      return [Cesium.Cartesian3.fromDegrees(coords[0], coords[1], coords[2] || 0)]

    case 'LineString':
      // Array of coordinates [[lon, lat, height?], ...]
      return coords.map((c: number[]) =>
        Cesium.Cartesian3.fromDegrees(c[0], c[1], c[2] || 0)
      )

    case 'Polygon':
      // Array of rings, use first ring (exterior)
      const ring = coords[0] || coords
      return ring.map((c: number[]) =>
        Cesium.Cartesian3.fromDegrees(c[0], c[1], c[2] || 0)
      )

    default:
      console.warn('Unsupported geometry type:', geometry.type)
      return []
  }
}

/**
 * Cleanup on unmount
 */
function cleanup() {
  deactivateTool()
}
</script>
