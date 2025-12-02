<template>
  <GlassPanel title="资源图层" noPadding>
    <div class="layer-header">
      <span>图层管理</span>
    </div>
    <div class="layer-list">
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
  </GlassPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GlassPanel from '@/components/common/GlassPanel.vue';

interface Layer {
  id: string;
  name: string;
  icon: string;
  active: boolean;
}

const layers = ref<Layer[]>([
  { id: 'base', name: '基础地理', icon: 'fa-solid fa-map', active: true },
  { id: 'bim', name: 'BIM 模型', icon: 'fa-solid fa-cubes', active: true },
  { id: 'cctv', name: '视频点位', icon: 'fa-solid fa-video', active: false },
  { id: 'stations', name: '水雨情站', icon: 'fa-solid fa-location-dot', active: true },
]);

function toggleLayer(layer: Layer) {
  layer.active = !layer.active;
  // TODO: Emit event to update Cesium layers
}
</script>

<style scoped lang="scss">
.layer-header {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-weight: 600;
  font-size: 14px;
}

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
</style>
