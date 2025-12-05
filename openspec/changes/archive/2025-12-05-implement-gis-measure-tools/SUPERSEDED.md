# Change Superseded

**Date**: 2025-12-03
**Status**: 14/15 tasks completed (93%), but **superseded by `add-gis-drawing-toolkit`**

## Reason for Superseding

After completing 93% of this change, we decided to adopt a unified architecture that merges measurement and drawing tools. Continuing with the current implementation would result in:

1. **Duplicate Architecture**: MeasureLayer.vue (634 lines) and future DrawLayer.vue would share similar patterns
2. **Limited Extensibility**: Current measurement tools lack editing, styling, and 3D capabilities
3. **Technical Debt**: Completing this change would create legacy code that needs immediate refactoring

## What Was Completed

✅ **Delivered Features**:
- Distance measurement tool (two-point with preview line and circle)
- Area measurement tool (polygon with double-click to finish)
- MeasurePanel UI with history management
- Store architecture (`useMeasureStore`)
- Type definitions (`src/types/measure.ts`)
- Real-time preview using CallbackProperty pattern

✅ **Proven Patterns**:
- CallbackProperty for dynamic geometry updates (lines 308-340 in MeasureLayer.vue)
- Event handling with throttling (16ms for 60fps)
- Entity mapping for deletion (Map<measurementId, Entity[]>)

These patterns will be **reused** in the unified GIS architecture.

## What's Not Completed

- [ ] T5.3: Backend API integration (optional) - **Deferred to unified architecture**

## Migration to Unified Architecture

The completed work will be **migrated**, not discarded:

### Code Reuse

```typescript
// Old: MeasureLayer.vue (634 lines)
function updateDistancePreview() {
  distancePreviewLine.value = viewer.entities.add({
    polyline: {
      positions: new Cesium.CallbackProperty(() => {
        return [startPos, currentCursorPosition.value]
      }, false)
    }
  })
}

// New: MeasureTool.ts (reusing same pattern)
class MeasureTool extends DrawTool {
  updatePreview() {
    // Same CallbackProperty pattern
    this.previewEntity.polyline.positions = new Cesium.CallbackProperty(
      () => [this.startPosition, this.currentPosition],
      false
    )
  }
}
```

### Store Migration

```typescript
// Old: useMeasureStore
export const useMeasureStore = defineStore('measure', () => {
  const measurements = ref<Measurement[]>([])
  // ...
})

// New: useGISStore (superset)
export const useGISStore = defineStore('gis', () => {
  const features = ref<Map<string, BaseGraphic>>(new Map())
  // Measurements are just features with type='distance' or 'area'

  // Backward-compatible computed property
  const measurements = computed(() =>
    Array.from(features.value.values())
      .filter(f => f.type === 'distance' || f.type === 'area')
  )
})
```

### UI Migration

```typescript
// MeasurePanel.vue stays mostly unchanged
// Just switches from useMeasureStore to useGISStore

// Old:
const measureStore = useMeasureStore()
const measurements = computed(() => measureStore.measurements)

// New:
const gisStore = useGISStore()
const measurements = computed(() =>
  Array.from(gisStore.features.values())
    .filter(f => f.type === 'distance' || f.type === 'area')
)
```

## Benefits of Unified Architecture

Compared to completing this change separately:

| Aspect | If Completed Separately | Unified Architecture |
|--------|------------------------|---------------------|
| Code Duplication | MeasureLayer (634) + DrawLayer (~500) = 1134 lines | GISLayer (~400 lines unified) |
| Feature Set | No editing, no styling | Full editing + styling + 3D |
| Maintenance | Two parallel implementations | Single source of truth |
| 3D Support | Would need separate rewrite | Built-in from start |
| Time to Full Feature | 2 weeks (measure) + 3 weeks (draw) = 5 weeks | 4 weeks (unified) |

## References

- **Superseding Change**: `openspec/changes/add-gis-drawing-toolkit/`
- **Original Proposal**: `openspec/changes/implement-gis-measure-tools/proposal.md`
- **Completed Code**:
  - `src/components/cesium/MeasureLayer.vue` (will be replaced)
  - `src/stores/measure.ts` (will be replaced)
  - `src/types/measure.ts` (will be merged)
  - `src/components/common/MeasurePanel.vue` (will be updated)

## Next Steps

1. **Do NOT complete T5.3** (backend API) - it will be part of unified GIS data management
2. **Preserve existing code** during migration - use as reference
3. **Extract reusable patterns** to new architecture
4. **Test backward compatibility** - ensure MeasurePanel still works after migration

---

**Approved by**: [Project Lead]
**Date**: 2025-12-03
