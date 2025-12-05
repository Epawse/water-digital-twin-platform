# Cesium Coordinate Systems

## Purpose

Understanding and working with Cesium's coordinate systems and transformations.

---

## Overview

Cesium uses three primary coordinate systems. Proper conversion between them is essential for correct functionality.

---

## Coordinate Systems

### 1. Cartesian3 (ECEF - Earth-Centered, Earth-Fixed)

**Format**: `(x, y, z)` in meters from Earth's center

**Characteristics**:
- Origin: Earth's center
- X-axis: Points to (0°N, 0°E)
- Y-axis: Points to (0°N, 90°E)
- Z-axis: Points to North Pole
- Right-handed coordinate system

**When to use**: Internal calculations, 3D geometry, rendering

**Example**:
```typescript
const cartesian = new Cesium.Cartesian3(
  -2430602.0,  // x
  5386896.0,   // y
  2449871.0    // z
)
```

---

### 2. Cartographic (Geodetic)

**Format**: `(longitude, latitude, height)` in radians and meters

**Characteristics**:
- Longitude: -π to π radians (-180° to 180°)
- Latitude: -π/2 to π/2 radians (-90° to 90°)
- Height: meters above WGS84 ellipsoid
- Most intuitive for humans (but in radians!)

**When to use**:
- Database storage
- User input/output
- Geographic calculations
- Coordinate display

**Example**:
```typescript
const cartographic = new Cesium.Cartographic(
  Cesium.Math.toRadians(116.3912),  // longitude
  Cesium.Math.toRadians(39.9068),   // latitude
  100.0                              // height (meters)
)
```

---

### 3. Window Coordinates (Screen Space)

**Format**: `(x, y)` in pixels

**Characteristics**:
- Origin: Top-left corner of canvas
- X: Increases to the right
- Y: Increases downward
- Used for mouse events

**When to use**: UI interactions, picking

**Example**:
```typescript
const windowPosition = new Cesium.Cartesian2(
  event.clientX,  // x pixels
  event.clientY   // y pixels
)
```

---

## Common Conversions

### Degrees ↔ Radians

```typescript
// Degrees → Radians
const radians = Cesium.Math.toRadians(degrees)

// Radians → Degrees
const degrees = Cesium.Math.toDegrees(radians)
```

---

### Degrees → Cartesian3

```typescript
// Single point
const cartesian = Cesium.Cartesian3.fromDegrees(
  116.3912,  // longitude
  39.9068,   // latitude
  100        // height (optional, default 0)
)

// Array of points
const cartesians = Cesium.Cartesian3.fromDegreesArray([
  116.3912, 39.9068,  // point 1
  116.4012, 39.9168   // point 2
  // ...
])

// Array with heights
const cartesians = Cesium.Cartesian3.fromDegreesArrayHeights([
  116.3912, 39.9068, 100,  // lon, lat, height
  116.4012, 39.9168, 150
])
```

---

### Cartesian3 → Cartographic

```typescript
// Single conversion
const cartographic = Cesium.Cartographic.fromCartesian(cartesian)

// Extract degrees
const lonDeg = Cesium.Math.toDegrees(cartographic.longitude)
const latDeg = Cesium.Math.toDegrees(cartographic.latitude)
const height = cartographic.height
```

---

### Cartographic → Cartesian3

```typescript
const cartesian = Cesium.Cartographic.toCartesian(
  cartographic,
  ellipsoid // optional, defaults to WGS84
)
```

---

### Window Coordinates → Cartesian3

```typescript
// Pick position on terrain/3D tiles
const cartesian = viewer.scene.pickPosition(windowPosition)

// Pick position on globe surface (ignoring terrain)
const ray = viewer.camera.getPickRay(windowPosition)
const cartesian = viewer.scene.globe.pick(ray, viewer.scene)
```

---

## Batch Conversions (Performance Optimization)

When converting many coordinates, use batch operations for better performance.

```typescript
// Bad: Convert one at a time
cartesians.forEach(c => {
  const cartographic = Cesium.Cartographic.fromCartesian(c)
  // ...
})

// Good: Use ellipsoid batch method
const ellipsoid = Cesium.Ellipsoid.WGS84
const cartographics = ellipsoid.cartesianArrayToCartographicArray(cartesians)
```

---

## Reusing Scratch Objects

Avoid creating new objects in loops to reduce GC pressure.

```typescript
// Create reusable scratch objects
const scratchCartographic = new Cesium.Cartographic()
const scratchCartesian = new Cesium.Cartesian3()

// Reuse in loop
positions.forEach(pos => {
  Cesium.Cartographic.fromCartesian(pos, scratchCartographic)
  const height = scratchCartographic.height
  // ...
})
```

---

## Common Pitfalls

### ❌ Mixing Degrees and Radians

```typescript
// Wrong - Cartographic expects radians
const cartographic = new Cesium.Cartographic(116.3912, 39.9068, 0)
```

✅ **Solution**:
```typescript
const cartographic = new Cesium.Cartographic(
  Cesium.Math.toRadians(116.3912),
  Cesium.Math.toRadians(39.9068),
  0
)
```

---

### ❌ Forgetting Height

```typescript
// Creates point at ellipsoid surface (height=0)
const cartesian = Cesium.Cartesian3.fromDegrees(116.3912, 39.9068)
```

✅ **Solution**: Always specify height if needed
```typescript
const cartesian = Cesium.Cartesian3.fromDegrees(116.3912, 39.9068, 100)
```

---

### ❌ Not Validating Picked Positions

```typescript
// Crashes if user clicks on sky
const cartesian = viewer.scene.pickPosition(click.position)
const cartographic = Cesium.Cartographic.fromCartesian(cartesian) // Error!
```

✅ **Solution**: Always check for undefined
```typescript
const cartesian = viewer.scene.pickPosition(click.position)
if (!Cesium.defined(cartesian)) return

const cartographic = Cesium.Cartographic.fromCartesian(cartesian)
```

---

## Project-Specific Coordinate Types

This project uses TypeScript types for clarity:

```typescript
// See src/cesium/gis/core/types.ts
export type Coordinate2D = [number, number]        // [lon, lat] in degrees
export type Coordinate3D = [number, number, number] // [lon, lat, height] in degrees/meters

export interface ICartesian3 {
  x: number
  y: number
  z: number
}
```

**Usage**:
```typescript
// Store in database as Coordinate3D
const coord: Coordinate3D = [116.3912, 39.9068, 100]

// Convert to Cartesian3 for Cesium
const cartesian = Cesium.Cartesian3.fromDegrees(...coord)
```

---

## Distance Calculations

### Surface Distance

```typescript
const ellipsoid = Cesium.Ellipsoid.WGS84

const distance = ellipsoid.surfaceDistance(
  Cesium.Cartographic.fromDegrees(116.3912, 39.9068),
  Cesium.Cartographic.fromDegrees(116.4012, 39.9168)
)
console.log(`Distance: ${distance} meters`)
```

### Straight-Line Distance (3D)

```typescript
const distance = Cesium.Cartesian3.distance(cartesian1, cartesian2)
console.log(`3D Distance: ${distance} meters`)
```

---

## Reference Systems

### WGS84 Ellipsoid

Default ellipsoid used by Cesium:
```typescript
const ellipsoid = Cesium.Ellipsoid.WGS84
// Semi-major axis: 6378137 meters
// Semi-minor axis: 6356752.3142 meters
```

### Height References

- **Ellipsoid height**: Height above WGS84 ellipsoid
- **Terrain height**: Height above terrain surface
- **MSL height**: Height above Mean Sea Level (not directly supported)

**Clamping to ground**:
```typescript
entity.point.heightReference = Cesium.HeightReference.CLAMP_TO_GROUND
```

---

## Related Resources

- **[basics.md](basics.md)** - Cesium fundamentals
- **[performance.md](performance.md)** - Performance optimization
- **[Cesium Cartesian3 API](https://cesium.com/learn/cesiumjs/ref-doc/Cartesian3.html)**
- **[Cesium Cartographic API](https://cesium.com/learn/cesiumjs/ref-doc/Cartographic.html)**

---

**Last Updated**: 2025-12-05
**Maintainer**: GIS development team
