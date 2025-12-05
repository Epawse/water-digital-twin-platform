# Cesium Basics

## Purpose

Fundamental concepts and patterns for working with Cesium in this project.

---

## Core Concepts

### 1. Cesium.Viewer

The Viewer is the main entry point for Cesium applications.

**Creation**:
```typescript
import { shallowRef, onMounted, onUnmounted } from 'vue'
import * as Cesium from 'cesium'

const viewer = shallowRef<Cesium.Viewer | null>(null)

onMounted(() => {
  viewer.value = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    timeline: false,
    navigationHelpButton: false,
    animation: false
  })
})

onUnmounted(() => {
  viewer.value?.destroy()
  viewer.value = null
})
```

**⚠️ Important**: Always use `shallowRef`, never `ref()` (see [performance.md](performance.md))

---

### 2. Scene

The scene contains the globe, entities, primitives, and camera.

**Common operations**:
```typescript
const scene = viewer.value?.scene

// Pick an entity at screen position
const pickedObject = scene.pick(windowPosition)

// Pick a position on terrain/3D tiles
const cartesian = scene.pickPosition(windowPosition)
```

---

### 3. Entities

Entities are high-level graphical objects (points, lines, polygons, models).

**Creation**:
```typescript
const entity = viewer.entities.add({
  id: 'unique-id',
  name: 'My Entity',
  position: Cesium.Cartesian3.fromDegrees(116.3912, 39.9068, 0),
  point: {
    pixelSize: 10,
    color: Cesium.Color.RED,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 2
  }
})
```

---

### 4. Event Handling

Cesium uses `ScreenSpaceEventHandler` for user input.

```typescript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

handler.setInputAction((click) => {
  const cartesian = viewer.scene.pickPosition(click.position)
  if (cartesian) {
    console.log('Clicked position:', cartesian)
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

onUnmounted(() => {
  handler.destroy()
})
```

---

## Common Pitfalls

### ❌ Using `ref()` for Viewer
```typescript
// Bad - causes performance issues
const viewer = ref(new Cesium.Viewer('cesiumContainer'))
```

**Solution**: Use `shallowRef` (see [performance.md](performance.md))

### ❌ Forgetting to Destroy Resources
```typescript
// Memory leak!
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
// ...but never call handler.destroy()
```

**Solution**: Always destroy in cleanup hooks

### ❌ Mixing Degrees and Radians
```typescript
// Wrong - Cartographic expects radians
const cartographic = new Cesium.Cartographic(116.3912, 39.9068, 0)
```

**Solution**: Use `Cesium.Math.toRadians()` or `fromDegrees()` helpers

---

## Next Steps

- **Performance optimization**: See [performance.md](performance.md)
- **Coordinate conversions**: See [coordinates.md](coordinates.md)
- **Entity patterns**: See [entities.md](entities.md)

---

**Last Updated**: 2025-12-05
