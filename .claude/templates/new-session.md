# New Session Template

> Copy the following content to a new conversation to restore project context

---

## Quick Restore (Recommended)

```
Please read the following files to restore project context:

1. openspec/project.md
2. openspec/changes/add-gis-drawing-toolkit/worklog.md
3. devlogs/devlog-YYYY-MM-DD.md

Then summarize current status and next step suggestions.
```

> Note: Replace `YYYY-MM-DD` with today's date

---

## Full Restore

```
Please fully restore project context:

1. Read openspec/project.md to understand project tech stack
2. Run `openspec list` to view current changes
3. Read active change worklogs
4. Read today's devlog (if exists)
5. Summarize current status and TODOs
```

---

## Task-Specific Restore

### Continue GIS Development
```
Restore GIS drawing toolkit development context:
1. openspec/changes/add-gis-drawing-toolkit/worklog.md
2. .claude/skills/cesium-webgis/SKILL.md
```

### Code Review
```
Review recent code changes:
1. git log --oneline -10
2. git diff HEAD~3
```

---

## Automation

CLAUDE.md is configured, Claude Code will automatically:
- Load project context
- Recognize relevant Skills
- Understand OpenSpec workflow

Just describe your task, Claude will automatically fetch relevant context.

---

## ⚠️ Important Reminders

### Git Operations MUST Use Terminal Commands

```bash
# ✅ Correct: Use terminal
git add . && git commit -m "msg" && git push

# ❌ NEVER: Use GitHub MCP push_files
mcp__github__push_files(...)  # Creates independent history, causes divergence!
```

### GitHub MCP Allowed For
- Create PR: `mcp__github__create_pull_request`
- Query info: `mcp__github__get_*`, `mcp__github__list_*`
- Issue management: `mcp__github__create_issue`
