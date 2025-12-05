# Cesium WebGIS Skill

This skill provides authoritative knowledge and guidelines for working with Cesium in this project.

---

## Purpose

The Cesium WebGIS skill serves as the centralized knowledge base for:
- Cesium best practices and patterns
- 3D GIS implementation guidelines
- Performance optimization techniques
- Coordinate system handling
- Common pitfalls and solutions

---

## Skill Structure

```
skills/cesium-webgis/
├── SKILL.md              # This file - skill overview
└── resources/            # Detailed knowledge resources
    ├── basics.md         # Cesium fundamentals
    ├── performance.md    # Performance optimization (links to docs/GIS_PERFORMANCE_OPTIMIZATION.md)
    ├── coordinates.md    # Coordinate systems and transformations
    ├── entities.md       # Entity management patterns
    └── testing.md        # Testing Cesium code
```

---

## When to Consult This Skill

**Before implementing Cesium features**, check these resources:

1. **New to Cesium?** → Start with `resources/basics.md`
2. **Performance issues?** → See `resources/performance.md` and `docs/GIS_PERFORMANCE_OPTIMIZATION.md`
3. **Coordinate conversions?** → See `resources/coordinates.md`
4. **Entity management?** → See `resources/entities.md`
5. **Writing tests?** → See `resources/testing.md`

---

## Key Principles

### 1. Performance First
- Always use `CallbackProperty` for dynamic entity properties
- Avoid frequent entity creation/destruction
- Use `shallowRef` for Cesium.Viewer instances in Vue
- See `resources/performance.md` for details

### 2. Coordinate System Awareness
- Understand Cartesian3 vs Cartographic vs WGS84
- Use appropriate coordinate system for each operation
- Document coordinate system in function signatures
- See `resources/coordinates.md` for conversions

### 3. Memory Management
- Properly dispose of Cesium resources
- Use `destroy()` methods for entities, data sources, primitives
- Avoid memory leaks in long-running applications

### 4. Reactivity Considerations (Vue)
- Use `shallowRef` for large Cesium objects
- Avoid deep reactivity on Cesium.Viewer or Cesium.Entity
- Extract data for UI display, don't bind Cesium objects directly

---

## Integration with OpenSpec

When creating OpenSpec changes involving Cesium:

1. **Consult this skill** before writing `proposal.md` or `design.md`
2. **Reference specific resources** in design decisions
3. **Update this skill** if you discover new patterns or best practices
4. **Link from specs** to relevant skill resources

Example reference in design.md:
```markdown
### Decision 3: Use CallbackProperty for Dynamic Updates

**Rationale**: As documented in `skills/cesium-webgis/resources/performance.md`,
CallbackProperty eliminates entity recreation overhead...
```

---

## Contributing to This Skill

### When to Add New Resources

Add new resources when you:
- Discover a reusable pattern or technique
- Solve a complex Cesium problem worth documenting
- Learn best practices from official documentation or community

### Resource Format

Each resource should:
- Start with a clear **Purpose** section
- Include **Code Examples** (with comments)
- List **Common Pitfalls** if applicable
- Reference **Official Docs** where appropriate
- Use **English** for all content

### Update Process

1. Create or update resource file in `resources/`
2. Update this SKILL.md if structure changes
3. Link from relevant OpenSpec docs
4. Commit with message: `docs(skill): add/update cesium-webgis resource`

---

## External References

### Official Documentation
- [Cesium Official Docs](https://cesium.com/learn/)
- [Cesium API Reference](https://cesium.com/learn/cesiumjs/ref-doc/)
- [Cesium Community Forum](https://community.cesium.com/)

### Project-Specific Docs
- **[docs/GIS_PERFORMANCE_OPTIMIZATION.md](../../docs/GIS_PERFORMANCE_OPTIMIZATION.md)** - Detailed performance optimization guide
- **[docs/GIS_FEATURE_MIGRATION_PLAN.md](../../docs/GIS_FEATURE_MIGRATION_PLAN.md)** - 2D→3D migration reference
- **[docs/gis-architecture.md](../../docs/gis-architecture.md)** - GIS architecture review

### Related OpenSpec Changes
- **[add-gis-drawing-toolkit](../../openspec/changes/add-gis-drawing-toolkit/)** - GIS drawing tools implementation

---

## Skill Maintenance

**Status**: Active
**Created**: 2025-12-05
**Last Updated**: 2025-12-05
**Maintainer**: GIS development team

When Cesium major versions change or significant architectural decisions are made, update this skill accordingly.

---

## Quick Tips

💡 **CallbackProperty is your friend** - Use it for all dynamic entity properties
💡 **shallowRef for Viewer** - Never use `ref()` for Cesium.Viewer
💡 **Clean up resources** - Always call `.destroy()` when done
💡 **Test with real coordinates** - Mock data should use realistic WGS84 coordinates
💡 **Check the forum first** - Many Cesium questions already answered in community

---

**Next**: Start with `resources/basics.md` for Cesium fundamentals
