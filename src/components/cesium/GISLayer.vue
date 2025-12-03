<template>
  <!-- This is a logical component with no template -->
</template>

<script setup lang="ts">
import { watch, onMounted, onUnmounted, shallowRef } from 'vue'
import { useCesiumStore } from '@/stores/cesium'
import { useGISStore } from '@/stores/gis'
import { DrawTool } from '@/cesium/gis/tools/DrawTool'
import type { DrawToolType } from '@/types/draw'

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
      toolType: toolType,
      onComplete: (graphic) => {
        // Register graphic to GISStore
        const feature = {
          id: graphic.id,
          type: graphic.type,
          name: graphic.name,
          properties: graphic.properties || {},
          createdAt: new Date()
        }
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
      gisStore.stopDrawing()
    } catch (error) {
      console.error('Failed to deactivate tool:', error)
    }
  }
}

/**
 * Cleanup on unmount
 */
function cleanup() {
  deactivateTool()
}
</script>
