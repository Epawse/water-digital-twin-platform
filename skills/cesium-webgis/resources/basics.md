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

**Access**:
```typescript
const scene = viewer.value?.scene
```

**Common operations**:
```typescript
// Pick an entity at screen position
const pickedObject = scene.pick(windowPosition)

// Pick a position on terrain/3D tiles
const cartesian = scene.pickPosition(windowPosition)

// Get camera state
const camera = scene.camera
const cameraPosition = camera.positionCartographic
```

---

### 3. Entities

Entities are high-level graphical objects (points, lines, polygons, models).

**Creation**:
```typescript
const entity = viewer.entities.add({
  id: 'unique-id',
  name: 'My Entity',
  position: Cesium.Cartesian3.fromDegrees(116.3912, 39.9068, 0), // Lon, Lat, Height
  point: {
    pixelSize: 10,
    color: Cesium.Color.RED,
    outlineColor: Cesium.Color.WHITE,
    outlineWidth: 2
  }
})
```

**Removal**:
```typescript
// Remove specific entity
viewer.entities.remove(entity)

// Remove by ID
const entity = viewer.entities.getById('unique-id')
if (entity) viewer.entities.remove(entity)

// Remove all
viewer.entities.removeAll()
```

---

### 4. Coordinate Systems

Cesium uses multiple coordinate systems. Understanding conversions is critical.

#### Cartesian3 (ECEF - Earth-Centered, Earth-Fixed)
```typescript
const cartesian = new Cesium.Cartesian3(x, y, z)
```
- Origin at Earth's center
- X-axis through (0°N, 0°E)
- Z-axis through North Pole
- **Use for**: Internal calculations, 3D math

#### Cartographic (Lon/Lat/Height)
```typescript
const cartographic = new Cesium.Cartographic(
  Cesium.Math.toRadians(116.3912), // Longitude in radians
  Cesium.Math.toRadians(39.9068),  // Latitude in radians
  0                                 // Height in meters
)
```
- Longitude: -π to π radians (-180° to 180°)
- Latitude: -π/2 to π/2 radians (-90° to 90°)
- Height: meters above ellipsoid
- **Use for**: Human-readable coordinates, database storage

#### Conversions
```typescript
// Degrees → Cartesian3
const cartesian = Cesium.Cartesian3.fromDegrees(lon, lat, height)
const cartesians = Cesium.Cartesian3.fromDegreesArray([lon1, lat1, lon2, lat2])

// Cartesian3 → Cartographic
const cartographic = Cesium.Cartographic.fromCartesian(cartesian)

// Cartographic → Degrees
const lonDeg = Cesium.Math.toDegrees(cartographic.longitude)
const latDeg = Cesium.Math.toDegrees(cartographic.latitude)
```

For more details, see [coordinates.md](coordinates.md).

---

### 5. Event Handling

Cesium uses `ScreenSpaceEventHandler` for user input.

**Basic pattern**:
```typescript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

// Left click
handler.setInputAction((click) => {
  const cartesian = viewer.scene.pickPosition(click.position)
  if (cartesian) {
    console.log('Clicked position:', cartesian)
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

// Mouse move
handler.setInputAction((movement) => {
  const cartesian = viewer.scene.pickPosition(movement.endPosition)
  // Handle mouse move
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

// Cleanup
onUnmounted(() => {
  handler.destroy()
})
```

**Available event types**:
- `LEFT_CLICK`, `RIGHT_CLICK`, `MIDDLE_CLICK`
- `LEFT_DOUBLE_CLICK`
- `LEFT_DOWN`, `LEFT_UP`
- `MOUSE_MOVE`
- `WHEEL`
- `PINCH_START`, `PINCH_MOVE`, `PINCH_END`

---

### 6. Entity Properties

Cesium entities support many visual properties.

#### Point
```typescript
point: {
  pixelSize: 10,
  color: Cesium.Color.RED,
  outlineColor: Cesium.Color.WHITE,
  outlineWidth: 2,
  heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
}
```

#### Polyline
```typescript
polyline: {
  positions: [cartesian1, cartesian2, cartesian3],
  width: 3,
  material: Cesium.Color.YELLOW,
  clampToGround: true
}
```

#### Polygon
```typescript
polygon: {
  hierarchy: Cesium.Cartesian3.fromDegreesArray([
    lon1, lat1, lon2, lat2, lon3, lat3
  ]),
  material: Cesium.Color.RED.withAlpha(0.5),
  outline: true,
  outlineColor: Cesium.Color.BLACK,
  outlineWidth: 2
}
```

#### Ellipse (Circle)
```typescript
ellipse: {
  semiMajorAxis: 500, // meters
  semiMinorAxis: 500,
  material: Cesium.Color.BLUE.withAlpha(0.5),
  outline: true,
  outlineColor: Cesium.Color.WHITE
}
```

---

### 7. Camera Control

**Fly to position**:
```typescript
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.3912, 39.9068, 10000),
  duration: 2.0 // seconds
})
```

**Set view immediately**:
```typescript
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(116.3912, 39.9068, 10000),
  orientation: {
    heading: Cesium.Math.toRadians(0),
    pitch: Cesium.Math.toRadians(-45),
    roll: 0
  }
})
```

**Zoom to entity**:
```typescript
viewer.zoomTo(entity, new Cesium.HeadingPitchRange(0, -Math.PI / 4, 1000))
```

---

## Common Patterns

### Pattern 1: Click to Add Point

```typescript
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

handler.setInputAction((click) => {
  const cartesian = viewer.scene.pickPosition(click.position)
  if (!cartesian) return

  viewer.entities.add({
    position: cartesian,
    point: {
      pixelSize: 10,
      color: Cesium.Color.RED
    }
  })
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

### Pattern 2: Dynamic Preview with CallbackProperty

```typescript
const previewEntity = viewer.entities.add({
  polyline: {
    positions: new Cesium.CallbackProperty(() => {
      return this.currentPositions // Updated automatically
    }, false),
    width: 2,
    material: Cesium.Color.YELLOW
  }
})

handler.setInputAction((movement) => {
  const cartesian = viewer.scene.pickPosition(movement.endPosition)
  if (cartesian) {
    this.currentPositions = [...this.points, cartesian]
  }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
```

### Pattern 3: Entity Selection

```typescript
handler.setInputAction((click) => {
  const pickedObject = viewer.scene.pick(click.position)

  if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
    const entity = pickedObject.id
    console.log('Selected entity:', entity.id)

    // Highlight
    entity.point.color = Cesium.Color.YELLOW
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)
```

---

## Common Pitfalls

### ❌ Using `ref()` for Viewer
```typescript
// Bad - causes performance issues
const viewer = ref(new Cesium.Viewer('cesiumContainer'))
```

**Solution**: Use `shallowRef` (see [performance.md](performance.md))

---

### ❌ Forgetting to Destroy Resources
```typescript
// Memory leak!
const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
// ...but never call handler.destroy()
```

**Solution**: Always destroy in cleanup hooks
```typescript
onUnmounted(() => {
  handler?.destroy()
  viewer.value?.destroy()
})
```

---

### ❌ Mixing Degrees and Radians
```typescript
// Wrong - Cartographic expects radians
const cartographic = new Cesium.Cartographic(116.3912, 39.9068, 0)
```

**Solution**: Use conversion utilities
```typescript
// Correct
const cartographic = new Cesium.Cartographic(
  Cesium.Math.toRadians(116.3912),
  Cesium.Math.toRadians(39.9068),
  0
)

// Or use helper
const cartesian = Cesium.Cartesian3.fromDegrees(116.3912, 39.9068, 0)
```

---

### ❌ Not Checking for Valid Positions
```typescript
// Crashes if user clicks on sky
const cartesian = viewer.scene.pickPosition(click.position)
cartesian.x // Error if undefined!
```

**Solution**: Always validate
```typescript
const cartesian = viewer.scene.pickPosition(click.position)
if (!Cesium.defined(cartesian)) return
// Safe to use cartesian
```

---

## Next Steps

- **Performance optimization**: See [performance.md](performance.md)
- **Coordinate conversions**: See [coordinates.md](coordinates.md)
- **Entity patterns**: See [entities.md](entities.md)
- **Testing Cesium code**: See [testing.md](testing.md)

---

## External Resources

- [Cesium Sandcastle](https://sandcastle.cesium.com/) - Interactive examples
- [Cesium Tutorials](https://cesium.com/learn/cesiumjs-learn/) - Official tutorials
- [Cesium API Reference](https://cesium.com/learn/cesiumjs/ref-doc/) - Complete API documentation

---

**Last Updated**: 2025-12-05
**Maintainer**: GIS development team
