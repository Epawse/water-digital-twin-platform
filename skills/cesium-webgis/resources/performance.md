# Cesium Performance Optimization

## Purpose

This resource provides performance optimization patterns and anti-patterns for Cesium applications. It complements the detailed case study in `docs/GIS_PERFORMANCE_OPTIMIZATION.md`.

---

## Key Performance Principles

### 1. Avoid Frequent Entity Creation/Destruction

**❌ Anti-pattern: Recreate entities every frame**
```typescript
// Bad: Creates new entities on every mouse move
onMouseMove(cartesian: Cesium.Cartesian3) {
  this.viewer.entities.removeAll() // Expensive!
  this.viewer.entities.add({
    position: cartesian,
    point: { pixelSize: 10 }
  })
}
```

**✅ Pattern: Use CallbackProperty for dynamic updates**
```typescript
// Good: Create entity once, update via callback
const entity = this.viewer.entities.add({
  position: new Cesium.CallbackProperty(() => {
    return this.currentPosition // Updated automatically
  }, false),
  point: { pixelSize: 10 }
})
```

**Impact**: Eliminates ~180 entity operations per second in drawing tools (see `docs/GIS_PERFORMANCE_OPTIMIZATION.md`)

---

### 2. Use CallbackProperty for All Dynamic Properties

CallbackProperty tells Cesium to evaluate a function every frame, eliminating the need to manually update properties.

**When to use**:
- Dynamic positions (mouse tracking, animations)
- Real-time property changes (colors, sizes, visibility)
- Computed properties (distances, areas)

**Supported property types**:
- `PositionProperty` (Cartesian3)
- `ColorProperty` (Color)
- `MaterialProperty` (Material)
- And most other Cesium properties

**Example: Dynamic line**
```typescript
const line = viewer.entities.add({
  polyline: {
    positions: new Cesium.CallbackProperty(() => {
      // Returns updated positions every frame
      return this.getLinePoints()
    }, false), // false = not constant (re-evaluate every frame)
    width: 2,
    material: Cesium.Color.YELLOW
  }
})
```

---

### 3. Smart Rebuild Strategy

Even with CallbackProperty, some scenarios require entity recreation (e.g., changing entity type). Minimize these rebuilds.

**Pattern: Only rebuild when necessary**
```typescript
updatePreview() {
  const vertexCount = this.vertices.length

  // Only rebuild if topology changed
  if (vertexCount !== this.lastVertexCount) {
    this.rebuildPreviewEntity()
    this.lastVertexCount = vertexCount
  }

  // CallbackProperty handles position updates automatically
}
```

---

### 4. Throttle High-Frequency Events

Mouse move events fire at 60-120 Hz. Even with CallbackProperty, excessive event handling can cause lag.

**Pattern: Throttle mouse events**
```typescript
import { throttle } from 'lodash-es'

// Throttle to ~20fps (sufficient for preview)
const throttledMouseMove = throttle((movement: Cesium.ScreenSpaceEventHandler.MotionEvent) => {
  const cartesian = this.viewer.scene.pickPosition(movement.endPosition)
  if (cartesian) {
    this.currentPosition = cartesian // Updated by CallbackProperty
  }
}, 50) // 50ms = 20fps

handler.setInputAction(throttledMouseMove, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
```

**Tuning**:
- Drawing preview: 50ms (20fps) is sufficient
- Real-time tracking: 16ms (60fps) for smooth motion
- Animations: Use Cesium's built-in interpolation

---

### 5. Minimize GC Pressure

Avoid creating temporary objects in hot code paths.

**❌ Anti-pattern: Create objects in loops**
```typescript
// Bad: Creates thousands of objects
positions.forEach((pos, index) => {
  const cartographic = Cesium.Cartographic.fromCartesian(pos) // New object!
  const height = cartographic.height
  // ...
})
```

**✅ Pattern: Reuse objects**
```typescript
// Good: Reuse scratch objects
const scratchCartographic = new Cesium.Cartographic()

positions.forEach((pos, index) => {
  Cesium.Cartographic.fromCartesian(pos, scratchCartographic) // Reuse!
  const height = scratchCartographic.height
  // ...
})
```

Cesium provides many "scratch" variants: `Cartesian3.ZERO`, `scratchCartesian`, etc.

---

### 6. Vue Reactivity Best Practices

**❌ Anti-pattern: Deep reactivity on Cesium objects**
```typescript
// Bad: Vue will try to make all Cesium properties reactive
const viewer = ref(new Cesium.Viewer('cesiumContainer'))
```

**✅ Pattern: Use shallowRef**
```typescript
// Good: Only the reference is reactive
const viewer = shallowRef<Cesium.Viewer | null>(null)

onMounted(() => {
  viewer.value = new Cesium.Viewer('cesiumContainer')
})
```

**Why**: Cesium objects are massive (thousands of properties). Deep reactivity causes:
- Slow initialization
- Memory overhead
- Performance degradation

---

## Performance Monitoring

### 1. FPS Counter

Enable Cesium's built-in FPS counter:
```typescript
viewer.scene.debugShowFramesPerSecond = true
```

### 2. Chrome DevTools Performance Profile

1. Open DevTools → Performance tab
2. Start recording
3. Perform the action (e.g., draw a shape)
4. Stop recording
5. Look for:
   - Long tasks (>50ms)
   - Frequent GC pauses
   - Layout thrashing

### 3. Entity Count

Monitor entity count during development:
```typescript
console.log(`Entities: ${viewer.entities.values.length}`)
```

**Guidelines**:
- <100 entities: No issues
- 100-1000 entities: Optimize if needed
- >1000 entities: Consider clustering or billboards

---

## Common Performance Issues

### Issue 1: Stuttering During Drawing

**Symptoms**: FPS drops <30 during mouse movement
**Cause**: Entity creation/destruction on every mouse move
**Solution**: CallbackProperty pattern (see `docs/GIS_PERFORMANCE_OPTIMIZATION.md`)

### Issue 2: Slow Initialization

**Symptoms**: Cesium.Viewer takes >3 seconds to initialize
**Cause**: Deep reactivity on viewer object
**Solution**: Use `shallowRef` instead of `ref`

### Issue 3: Memory Leaks

**Symptoms**: Memory usage grows unbounded
**Cause**: Not destroying entities/data sources
**Solution**: Proper cleanup in `onUnmounted`

```typescript
onUnmounted(() => {
  viewer.value?.entities.removeAll()
  viewer.value?.dataSources.removeAll()
  viewer.value?.destroy()
})
```

### Issue 4: Choppy Animations

**Symptoms**: Animations not smooth
**Cause**: Manual property updates instead of built-in interpolation
**Solution**: Use Cesium's SampledPositionProperty or interpolators

---

## Performance Checklist

Before deploying a Cesium feature:

- [ ] Used CallbackProperty for all dynamic entity properties
- [ ] Used shallowRef for Cesium.Viewer in Vue components
- [ ] Throttled high-frequency events (mouse move, etc.)
- [ ] Reused scratch objects in hot code paths
- [ ] Implemented proper cleanup (destroy() calls)
- [ ] Tested with FPS counter enabled
- [ ] Verified no memory leaks over 5+ minutes of use
- [ ] Entity count <1000 or using clustering
- [ ] Tested on lower-end hardware

---

## Related Resources

- **[../SKILL.md](../SKILL.md)** - Cesium WebGIS skill overview
- **[docs/GIS_PERFORMANCE_OPTIMIZATION.md](../../../docs/GIS_PERFORMANCE_OPTIMIZATION.md)** - Detailed performance case study
- **[Cesium Performance Tips](https://cesium.com/learn/cesiumjs-learn/cesiumjs-performance/)** - Official documentation

---

## Case Study

For a detailed case study of optimizing drawing tool performance from <30fps to 60fps, see:

**[docs/GIS_PERFORMANCE_OPTIMIZATION.md](../../../docs/GIS_PERFORMANCE_OPTIMIZATION.md)**

This document covers:
- Problem diagnosis
- CallbackProperty implementation for all graphic types
- Testing methodology
- Performance metrics and results

---

**Last Updated**: 2025-12-05
**Maintainer**: GIS development team
