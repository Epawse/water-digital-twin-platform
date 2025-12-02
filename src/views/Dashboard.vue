<template>
  <div class="dashboard-layout">
    <!-- Left Sidebar -->
    <transition name="sidebar-left">
      <aside v-show="!isUiHidden" class="sidebar left">
        <KpiBoard />
        <WeatherStrip />
        <LayerControl class="flex-fill" />
      </aside>
    </transition>

    <!-- Right Sidebar -->
    <transition name="sidebar-right">
      <aside v-show="!isUiHidden" class="sidebar right">
        <WaterSituation />
        <CctvPlayer />
        <AiAssistant class="flex-fill" />
      </aside>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import { useDashboardStore } from '@/stores/dashboard'
import KpiBoard from '@/components/business/KpiBoard.vue'
import WeatherStrip from '@/components/business/WeatherStrip.vue'
import LayerControl from '@/components/business/LayerControl.vue'
import WaterSituation from '@/components/business/WaterSituation.vue'
import CctvPlayer from '@/components/business/CctvPlayer.vue'
import AiAssistant from '@/components/business/AiAssistant.vue'

const appStore = useAppStore()
const dashboardStore = useDashboardStore()
const isUiHidden = computed(() => appStore.isUiHidden)

onMounted(() => {
  dashboardStore.fetchData()
})
</script>

<style scoped lang="scss">
.dashboard-layout {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  pointer-events: none;
}

.sidebar {
  width: 340px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  pointer-events: auto;

  &.flex-fill {
    flex: 1;
    min-height: 0;
  }
}

.flex-fill {
  flex: 1;
  min-height: 0;
}

// Sidebar transitions
.sidebar-left-enter-active,
.sidebar-left-leave-active {
  transition: all 0.3s ease;
}

.sidebar-left-enter-from,
.sidebar-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.sidebar-right-enter-active,
.sidebar-right-leave-active {
  transition: all 0.3s ease;
}

.sidebar-right-enter-from,
.sidebar-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
