# Project Documentation

This directory contains the authoritative project documentation for the Water Conservancy Digital Twin Platform. All documents follow the conventions defined in `new.md` and `openspec/project.md`.

---

## 📋 Table of Contents

### Requirements & Planning
- **[requirements.md](requirements.md)** - Business requirements and functional specifications
- **[mvp-plan.md](mvp-plan.md)** - MVP planning and initial roadmap

### Architecture & Design
- **[architecture.md](architecture.md)** - System architecture overview
- **[gis-architecture.md](gis-architecture.md)** - GIS subsystem architecture review
- **[design-system.md](design-system.md)** - UI/UX design system and component guidelines

### Development Guidelines
- **[testing.md](testing.md)** - Testing strategy and quality assurance
- **[GIS_PERFORMANCE_OPTIMIZATION.md](GIS_PERFORMANCE_OPTIMIZATION.md)** - Performance optimization guide for Cesium/WebGIS
- **[GIS_FEATURE_MIGRATION_PLAN.md](GIS_FEATURE_MIGRATION_PLAN.md)** - 2D→3D feature migration reference

### Data Models
- **[data-models/sensor-data-catalog.md](data-models/sensor-data-catalog.md)** - Sensor types, metrics, and database schema
- **[real-data-summary.md](real-data-summary.md)** - ⚠️ DEPRECATED (see sensor-data-catalog.md)

### Historical References
- **[legacy/](legacy/)** - Archived documents for historical context (marked non-authoritative)
  - `gis-code-extract.md` - Code extraction snapshot (104K)
  - `phase-0-complete.md` - Phase 0 completion summary
  - `phase-1-conflict.md` - Phase 1 conflict analysis
  - `type-fixes-complete.md` - Type fixing completion summary
  - `work-breakdown.md` - Historical work breakdown

---

## 🎯 Document Organization Principles

Following `new.md` Phase 0 guidelines:

1. **Project-level rules, architecture, and conventions** → `docs/*.md` or `openspec/project.md`
2. **Feature/change-level specs and requirements** → `openspec/changes/<change-id>/`
3. **Reusable domain knowledge** → `skills/cesium-webgis/resources/*.md` (if created)
4. **Chronological development history** → `devlog-YYYY-MM-DD.md` (root)
5. **Implementation details** → Code comments, inline docs, or `docs/`

---

## 📚 Related Documentation

### OpenSpec (Authoritative Source of Truth)
- **[openspec/project.md](../openspec/project.md)** - Project context, tech stack, Git workflow
- **[openspec/changes/](../openspec/changes/)** - Feature specifications and worklogs
- **[openspec/specs/](../openspec/specs/)** - Domain-specific specifications

### Development Logs
- **[devlog-2025-12-05.md](../devlog-2025-12-05.md)** - Daily development log (example)
- Format: `devlog-YYYY-MM-DD.md` at project root

### Other Resources
- **[README.md](../README.md)** - Project overview and quick start
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Contribution guidelines
- **[DEVELOPMENT.md](../DEVELOPMENT.md)** - Development environment setup

---

## 🔍 How to Find Information

**I need to know about...**

| Topic | Where to Look |
|-------|---------------|
| System architecture | `architecture.md` |
| Business requirements | `requirements.md` |
| GIS/Cesium implementation | `gis-architecture.md`, `GIS_PERFORMANCE_OPTIMIZATION.md` |
| Testing approach | `testing.md` |
| Data models | `data-models/sensor-data-catalog.md` |
| Git workflow | `../openspec/project.md` (Git Workflow section) |
| Specific feature specs | `../openspec/changes/<feature-name>/` |
| Current work status | `../openspec/changes/<feature-name>/worklog.md` |
| Historical decisions | `legacy/` (for reference only) |

---

## ✅ Document Lifecycle

### Active Documents
- Located in `docs/*.md` or `openspec/`
- Kept up-to-date with project evolution
- Authoritative and maintained

### Deprecated Documents
- Marked with `⚠️ DEPRECATED` header
- Point to replacement documents
- Example: `real-data-summary.md`

### Legacy Documents
- Located in `docs/legacy/`
- Marked with `⚠️ HISTORICAL DOCUMENT - FOR REFERENCE ONLY`
- Preserved for historical context
- Not authoritative

---

## 📝 Contributing to Documentation

When updating documentation:

1. **Language**: All docs must be in **English**
2. **Format**: Use Markdown with clear structure
3. **References**: Link to related documents using relative paths
4. **Updates**: Keep `docs/README.md` index in sync
5. **Legacy**: Never edit `legacy/` docs - create new docs instead

For major documentation changes, consider creating an OpenSpec change proposal.

---

**Last Updated**: 2025-12-05 (Post document reorganization)
**Maintainer**: Project team
**Related**: See `new.md` for documentation workflow guidelines
