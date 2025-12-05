# Cesium Performance Optimization

## Purpose

Performance optimization patterns and anti-patterns for Cesium applications.

---

## Key Performance Principles

### 1. Avoid Frequent Entity Creation/Destruction

**❌ Anti-pattern**:
```typescript
onMouseMove(cartesian: Cesium.Cartesian3) {
  this.viewer.entities.removeAll() // Expensive!
  this.viewer.entities.add({ position: cartesian, point: { pixelSize: 10 } })
}
```

**✅ Pattern: Use CallbackProperty**:
```typescript
const entity = this.viewer.entities.add({
  position: new Cesium.CallbackProperty(() => {
    return this.currentPosition // Updated automatically
  }, false),
  point: { pixelSize: 10 }
})
```

---

### 2. Vue Reactivity Best Practices

**❌ Anti-pattern**:
```typescript
const viewer = ref(new Cesium.Viewer('cesiumContainer'))
```

**✅ Pattern**:
```typescript
const viewer = shallowRef<Cesium.Viewer | null>(null)
```

**Why**: Cesium objects have thousands of properties. Deep reactivity causes slow initialization and memory overhead.

---

### 3. Throttle High-Frequency Events

```typescript
import { throttle } from 'lodash-es'

const throttledMouseMove = throttle((movement) => {
  const cartesian = this.viewer.scene.pickPosition(movement.endPosition)
  if (cartesian) {
    this.currentPosition = cartesian
  }
}, 50) // 50ms = 20fps

handler.setInputAction(throttledMouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
```

---

### 4. Reuse Scratch Objects

```typescript
// Create reusable scratch objects
const scratchCartographic = new Cesium.Cartographic()

// Reuse in loop
positions.forEach(pos => {
  Cesium.Cartographic.fromCartesian(pos, scratchCartographic)
  const height = scratchCartographic.height
})
```

---

## Performance Checklist

- [ ] Used CallbackProperty for all dynamic entity properties
- [ ] Used shallowRef for Cesium.Viewer in Vue components
- [ ] Throttled high-frequency events
- [ ] Implemented proper cleanup (destroy() calls)
- [ ] Tested with FPS counter enabled

---

## Related Resources

- **[docs/GIS_PERFORMANCE_OPTIMIZATION.md](../../../docs/GIS_PERFORMANCE_OPTIMIZATION.md)** - Detailed case study

---

**Last Updated**: 2025-12-05
