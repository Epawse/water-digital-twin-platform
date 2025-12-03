<template>
  <GlassPanel title="图层管理" noPadding>
    <!-- Tab Navigation -->
    <div class="tab-nav">
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'resources' }"
        @click="activeTab = 'resources'"
      >
        <i class="fa-solid fa-layer-group"></i>
        资源图层
      </button>
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'features' }"
        @click="activeTab = 'features'"
      >
        <i class="fa-solid fa-draw-polygon"></i>
        绘制要素
        <span v-if="gisStore.featureCount > 0" class="badge">{{ gisStore.featureCount }}</span>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Tab 1: Resource Layers (Original) -->
      <div v-show="activeTab === 'resources'" class="layer-list">
        <div
          v-for="layer in layers"
          :key="layer.id"
          class="layer-item"
          :class="{ active: layer.active }"
          @click="toggleLayer(layer)"
        >
          <div class="layer-info">
            <i :class="layer.icon" class="layer-icon"></i>
            <span>{{ layer.name }}</span>
          </div>
          <i
            class="fa-solid toggle-icon"
            :class="layer.active ? 'fa-toggle-on' : 'fa-toggle-off'"
          ></i>
        </div>
      </div>

      <!-- Tab 2: GIS Features (New) -->
      <div v-show="activeTab === 'features'" class="features-panel">
        <!-- Quick Tool Buttons -->
        <div class="tool-buttons">
          <button
            v-for="tool in drawTools"
            :key="tool.id"
            class="tool-btn"
            :class="{ active: gisStore.toolType === tool.id }"
            :title="tool.name"
            @click="toggleDrawTool(tool.id)"
          >
            <i :class="tool.icon"></i>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="search-bar">
          <i class="fa-solid fa-search"></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索要素..."
          />
        </div>

        <!-- Feature List -->
        <div class="feature-list">
          <template v-if="filteredFeatures.length === 0">
            <div class="empty-state">
              <i class="fa-solid fa-inbox"></i>
              <p>{{ searchQuery ? '无匹配要素' : '暂无绘制要素' }}</p>
              <small>点击上方工具按钮开始绘制</small>
            </div>
          </template>

          <template v-else>
            <div
              v-for="group in groupedFeatures"
              :key="group.type"
              class="feature-group"
            >
              <div class="group-header">
                <i :class="group.icon"></i>
                <span>{{ group.name }}</span>
                <span class="count">({{ group.features.length }})</span>
              </div>
              <div
                v-for="feature in group.features"
                :key="feature.id"
                class="feature-item"
                :class="{ selected: gisStore.selectedFeatures.has(feature.id) }"
              >
                <div class="feature-info" @click="selectFeature(feature.id)">
                  <span class="feature-name">{{ feature.name }}</span>
                  <span class="feature-meta">{{ formatFeatureMeta(feature) }}</span>
                </div>
                <div class="feature-actions">
                  <button
                    class="action-btn"
                    title="显示/隐藏"
                    @click="toggleFeatureVisibility(feature.id)"
                  >
                    <i class="fa-solid" :class="feature.visible !== false ? 'fa-eye' : 'fa-eye-slash'"></i>
                  </button>
                  <button
                    class="action-btn"
                    title="定位"
                    @click="locateFeature(feature.id)"
                  >
                    <i class="fa-solid fa-location-crosshairs"></i>
                  </button>
                  <button
                    class="action-btn danger"
                    title="删除"
                    @click="deleteFeature(feature.id)"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>

        <!-- Batch Actions -->
        <div v-if="gisStore.featureCount > 0" class="batch-actions">
          <button class="batch-btn" @click="exportFeatures">
            <i class="fa-solid fa-download"></i>
            导出
          </button>
          <button class="batch-btn" @click="selectAllFeatures">
            <i class="fa-solid fa-check-double"></i>
            全选
          </button>
          <button class="batch-btn danger" @click="clearAllFeatures">
            <i class="fa-solid fa-broom"></i>
            清空
          </button>
        </div>
      </div>
    </div>
  </GlassPanel>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import GlassPanel from '@/components/common/GlassPanel.vue'
import { useGISStore } from '@/stores/gis'
import type { DrawToolType } from '@/types/draw'

interface Layer {
  id: string
  name: string
  icon: string
  active: boolean
}

const gisStore = useGISStore()

// Tab state
const activeTab = ref<'resources' | 'features'>('resources')

// Resource layers (original)
const layers = ref<Layer[]>([
  { id: 'base', name: '基础地理', icon: 'fa-solid fa-map', active: true },
  { id: 'bim', name: 'BIM 模型', icon: 'fa-solid fa-cubes', active: true },
  { id: 'cctv', name: '视频点位', icon: 'fa-solid fa-video', active: false },
  { id: 'stations', name: '水雨情站', icon: 'fa-solid fa-location-dot', active: true },
])

// Draw tools configuration
const drawTools = [
  { id: 'point', name: '点标注', icon: 'fa-solid fa-location-dot' },
  { id: 'line', name: '线绘制', icon: 'fa-solid fa-minus' },
  { id: 'circle', name: '圆形', icon: 'fa-regular fa-circle' },
  { id: 'rectangle', name: '矩形', icon: 'fa-regular fa-square' },
  { id: 'polygon', name: '多边形', icon: 'fa-solid fa-draw-polygon' },
]

// Search query
const searchQuery = ref('')

// === Resource Layer Functions (Original) ===
function toggleLayer(layer: Layer) {
  layer.active = !layer.active
  // TODO: Emit event to update Cesium layers
}

// === GIS Feature Functions (New) ===

/**
 * Toggle draw tool
 */
function toggleDrawTool(toolId: DrawToolType) {
  if (gisStore.toolType === toolId) {
    gisStore.setTool(null) // Deactivate if clicking same tool
  } else {
    gisStore.setTool(toolId) // Activate tool
  }
}

/**
 * Filter features by search query
 */
const filteredFeatures = computed(() => {
  const features = gisStore.featuresArray
  if (!searchQuery.value.trim()) {
    return features
  }

  const query = searchQuery.value.toLowerCase()
  return features.filter(f =>
    f.name.toLowerCase().includes(query) ||
    f.type.toLowerCase().includes(query)
  )
})

/**
 * Group features by type
 */
const groupedFeatures = computed(() => {
  const groups = [
    { type: 'point', name: '点标注', icon: 'fa-solid fa-location-dot', features: [] as any[] },
    { type: 'line', name: '线路径', icon: 'fa-solid fa-minus', features: [] as any[] },
    { type: 'circle', name: '圆形区域', icon: 'fa-regular fa-circle', features: [] as any[] },
    { type: 'rectangle', name: '矩形区域', icon: 'fa-regular fa-square', features: [] as any[] },
    { type: 'polygon', name: '多边形区域', icon: 'fa-solid fa-draw-polygon', features: [] as any[] },
  ]

  filteredFeatures.value.forEach(feature => {
    const group = groups.find(g => g.type === feature.type)
    if (group) {
      group.features.push(feature)
    }
  })

  // Return only non-empty groups
  return groups.filter(g => g.features.length > 0)
})

/**
 * Format feature metadata for display
 */
function formatFeatureMeta(feature: any): string {
  const parts = []

  // Add measurement info if available
  if (feature.properties?.length !== undefined) {
    parts.push(`${feature.properties.length.toFixed(0)}m`)
  }
  if (feature.properties?.area !== undefined) {
    const area = feature.properties.area
    if (area > 1000000) {
      parts.push(`${(area / 1000000).toFixed(2)}km²`)
    } else {
      parts.push(`${area.toFixed(0)}m²`)
    }
  }
  if (feature.properties?.radius !== undefined) {
    parts.push(`r=${feature.properties.radius.toFixed(0)}m`)
  }

  // Add creation time
  if (feature.createdAt) {
    const date = new Date(feature.createdAt)
    parts.push(date.toLocaleDateString())
  }

  return parts.join(' · ')
}

/**
 * Select a feature
 */
function selectFeature(featureId: string) {
  gisStore.selectFeature(featureId)
}

/**
 * Toggle feature visibility
 */
function toggleFeatureVisibility(featureId: string) {
  const graphic = gisStore.features.get(featureId)
  if (graphic) {
    graphic.visible = !graphic.visible
  }
}

/**
 * Locate (fly to) a feature
 */
function locateFeature(featureId: string) {
  const graphic = gisStore.features.get(featureId)
  if (graphic && graphic.getCenter) {
    const center = graphic.getCenter()
    // TODO: Fly to center position using Cesium camera
    console.log('Fly to feature:', featureId, center)
  }
}

/**
 * Delete a single feature
 */
function deleteFeature(featureId: string) {
  if (confirm('确定要删除该要素吗？')) {
    gisStore.removeFeature(featureId)
  }
}

/**
 * Export features as GeoJSON
 */
function exportFeatures() {
  const geojson = gisStore.exportGeoJSON()

  // Create download
  const blob = new Blob([geojson], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `features_${Date.now()}.geojson`
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * Select all features
 */
function selectAllFeatures() {
  gisStore.featuresArray.forEach(f => {
    gisStore.selectFeature(f.id, true) // true = multi-select
  })
}

/**
 * Clear all features
 */
function clearAllFeatures() {
  if (confirm(`确定要清空所有 ${gisStore.featureCount} 个要素吗？此操作不可恢复！`)) {
    gisStore.clearFeatures()
  }
}
</script>

<style scoped lang="scss">
// === Tab Navigation ===
.tab-nav {
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0 8px;
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: $text-sub;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  i {
    font-size: 14px;
  }

  .badge {
    position: absolute;
    top: 6px;
    right: 10px;
    background: $neon-cyan;
    color: #000;
    font-size: 10px;
    font-weight: 600;
    padding: 2px 5px;
    border-radius: 10px;
    min-width: 16px;
    text-align: center;
  }

  &:hover {
    color: $text-primary;
    background: rgba(255, 255, 255, 0.03);
  }

  &.active {
    color: $neon-cyan;
    border-bottom-color: $neon-cyan;
    text-shadow: 0 0 5px $neon-cyan;
  }
}

// === Tab Content ===
.tab-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

// === Resource Layers (Original Styles) ===
.layer-list {
  padding: 10px;
  flex: 1;
  overflow-y: auto;
  @include custom-scrollbar;
}

.layer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &.active {
    background: rgba(34, 211, 238, 0.1);
    border-left-color: $neon-cyan;

    .toggle-icon {
      color: $neon-cyan;
      text-shadow: 0 0 5px $neon-cyan;
    }
  }
}

.layer-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}

.layer-icon {
  width: 16px;
  text-align: center;
  color: $text-sub;
}

.toggle-icon {
  color: #555;
  transition: color 0.2s;
}

// === GIS Features Panel (New) ===
.features-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

// Tool Buttons
.tool-buttons {
  display: flex;
  gap: 6px;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.tool-btn {
  flex: 1;
  padding: 8px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: $text-sub;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: $text-primary;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background: rgba(34, 211, 238, 0.15);
    border-color: $neon-cyan;
    color: $neon-cyan;
    text-shadow: 0 0 5px $neon-cyan;
  }
}

// Search Bar
.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  i {
    color: $text-sub;
    font-size: 12px;
  }

  input {
    flex: 1;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    padding: 6px 10px;
    color: $text-primary;
    font-size: 12px;
    outline: none;
    transition: all 0.2s;

    &::placeholder {
      color: $text-sub;
    }

    &:focus {
      border-color: $neon-cyan;
      box-shadow: 0 0 5px rgba(34, 211, 238, 0.3);
    }
  }
}

// Feature List
.feature-list {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  @include custom-scrollbar;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  color: $text-sub;

  i {
    font-size: 48px;
    margin-bottom: 16px;
    opacity: 0.3;
  }

  p {
    margin: 0 0 8px 0;
    font-size: 14px;
  }

  small {
    font-size: 11px;
    opacity: 0.7;
  }
}

.feature-group {
  margin-bottom: 12px;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  color: $text-sub;
  text-transform: uppercase;
  margin-bottom: 6px;

  i {
    font-size: 12px;
  }

  .count {
    margin-left: auto;
    opacity: 0.6;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  margin-bottom: 4px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border-left: 3px solid transparent;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &.selected {
    background: rgba(34, 211, 238, 0.1);
    border-left-color: $neon-cyan;
  }
}

.feature-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;
  min-width: 0; // Allow text truncation
}

.feature-name {
  font-size: 12px;
  color: $text-primary;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.feature-meta {
  font-size: 10px;
  color: $text-sub;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.feature-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.action-btn {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  color: $text-sub;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: $text-primary;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &.danger:hover {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border-color: #ef4444;
  }
}

// Batch Actions
.batch-actions {
  display: flex;
  gap: 6px;
  padding: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.batch-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: $text-sub;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;

  i {
    font-size: 12px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: $text-primary;
    border-color: rgba(255, 255, 255, 0.2);
  }

  &.danger:hover {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border-color: #ef4444;
  }
}
</style>
