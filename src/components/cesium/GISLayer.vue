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
      case 'circle':
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
        positions = [centerPos, edgePos]

        graphic = new CircleGraphic(viewer, {
          name,
          style
        })
        break
      case 'rectangle':
        // Rectangle is stored as Polygon with 5 positions (4 corners + closing point)
        // RectangleGraphic.create() expects [corner1, corner2] (opposite corners)
        if (positions.length < 4) {
          console.error('Rectangle needs at least 4 corner positions:', positions.length)
          return null
        }
        // Use corner 0 (SW) and corner 2 (NE) as opposite corners
        positions = [positions[0], positions[2]]

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
}
</script>
