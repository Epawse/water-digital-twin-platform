# Development Logs

This directory contains daily development logs (`devlog-YYYY-MM-DD.md`) that track cross-change progress and significant work done each day.

---

## Purpose

Development logs serve as:
- **Chronological journal** of project progress
- **Cross-change summary** showing work across multiple features
- **Session tracker** documenting what was done when
- **Decision record** for significant issues and solutions
- **Next-step guide** for resuming work

---

## Format

Each devlog file follows the pattern: `devlog-YYYY-MM-DD.md`

### Structure

```markdown
# Development Log - YYYY-MM-DD

## Summary
Brief overview of the day's work

## Changes Worked On
### 1. change-name
- Work completed
- Key decisions
- Files modified

## Significant Issues Discovered
Notable problems found and how they were resolved

## Next-Step Suggestions
What to work on next

## Cross-Change Progress
Summary of all active changes
```

---

## Usage Guidelines

### When to Create

Create a new devlog when:
- Starting work on a new day
- Multiple changes are being worked on
- Significant cross-cutting work is done

### When to Update

Update the current day's devlog:
- After completing a significant piece of work
- When making important decisions
- Before ending the work session
- When discovering significant issues

### What to Include

**DO Include**:
- ✅ Changes and tasks worked on
- ✅ Key decisions made
- ✅ Significant issues and resolutions
- ✅ Cross-change progress summary
- ✅ Next-step suggestions
- ✅ Session-level summaries

**DON'T Include**:
- ❌ Detailed implementation notes (use `worklog.md` in change directories)
- ❌ Complete code snippets (use git commits)
- ❌ Chat transcripts (archive separately if needed)
- ❌ Low-level debugging details

---

## Relationship to Other Documents

| Document | Purpose | Location |
|----------|---------|----------|
| **devlog** | Daily cross-change progress | `devlogs/` |
| **worklog** | Per-change implementation progress | `openspec/changes/<change-id>/` |
| **commit messages** | Code-level changes | Git history |
| **docs/** | Technical documentation | `docs/` |

---

## Example Devlog Entry

See `devlog-2025-12-05.md` for a complete example showing:
- Multiple sessions in one day
- Cross-change work (document reorganization + GIS development)
- Decision documentation
- Progress tracking

---

## Archival

Devlogs are kept indefinitely for historical reference. They provide context for:
- Understanding project evolution
- Debugging past decisions
- Onboarding new team members
- Project retrospectives

---

**Convention**: Follow the format defined in `new.md` (now implemented in project structure)
**Language**: All devlogs must be in English
