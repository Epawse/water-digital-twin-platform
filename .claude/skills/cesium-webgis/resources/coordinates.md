# Cesium Coordinate Systems

## Purpose

Understanding and working with Cesium's coordinate systems and transformations.

---

## Coordinate Systems

### 1. Cartesian3 (ECEF)
- Origin: Earth's center
- Format: `(x, y, z)` in meters
- **Use for**: Internal calculations, 3D geometry

### 2. Cartographic (Geodetic)
- Format: `(longitude, latitude, height)` in radians and meters
- **Use for**: Database storage, user display

### 3. Window Coordinates
- Format: `(x, y)` in pixels
- **Use for**: UI interactions, picking

---

## Common Conversions

```typescript
// Degrees → Cartesian3
const cartesian = Cesium.Cartesian3.fromDegrees(lon, lat, height)

// Cartesian3 → Cartographic
const cartographic = Cesium.Cartographic.fromCartesian(cartesian)

// Cartographic → Degrees
const lonDeg = Cesium.Math.toDegrees(cartographic.longitude)
const latDeg = Cesium.Math.toDegrees(cartographic.latitude)

// Window → Cartesian3
const cartesian = viewer.scene.pickPosition(windowPosition)
```

---

## Common Pitfalls

### ❌ Mixing Degrees and Radians
```typescript
// Wrong
const cartographic = new Cesium.Cartographic(116.3912, 39.9068, 0)
```

**✅ Solution**:
```typescript
const cartographic = new Cesium.Cartographic(
  Cesium.Math.toRadians(116.3912),
  Cesium.Math.toRadians(39.9068),
  0
)
```

### ❌ Not Validating Picked Positions
```typescript
const cartesian = viewer.scene.pickPosition(click.position)
if (!Cesium.defined(cartesian)) return // Always check!
```

---

**Last Updated**: 2025-12-05
