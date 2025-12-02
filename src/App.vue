<template>
  <div class="app-container">
    <!-- Layer 0: Persistent 3D Map -->
    <CesiumViewer />

    <!-- UI Layers -->
    <MainLayout />
  </div>
</template>

<script setup lang="ts">
import CesiumViewer from '@/components/cesium/CesiumViewer.vue';
import MainLayout from '@/layout/MainLayout.vue';
</script>

<style scoped>
.app-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
