# CLAUDE.md

> Claude Code automatically loads this file as project context

## Project Overview

**Water Conservancy Digital Twin Platform** - Vue 3 + TypeScript + CesiumJS 3D GIS Application

See `openspec/project.md` for details.

## Context Restoration

At the start of a new conversation, read these files to restore context:

```
1. openspec/project.md          # Project tech stack and conventions
2. openspec/changes/*/worklog.md # Active change worklogs
3. devlogs/devlog-YYYY-MM-DD.md  # Today's development log
```

## Workflows

### OpenSpec Change Management

```
/openspec:proposal <title>  # Create change proposal (no code)
/openspec:apply <id>        # Implement approved change
/openspec:archive <id>      # Archive completed change
```

See: `openspec/AGENTS.md`

### Skills Knowledge Base

Project has domain knowledge skills that Claude loads based on task relevance:

- **cesium-webgis**: Cesium 3D GIS best practices (`.claude/skills/cesium-webgis/`)

### MCP Tool Usage

**Recommended MCP Tools**:

| Task | Tool | Note |
|------|------|------|
| Library docs | `mcp__context7__*` | ✅ Preferred |
| Browser debugging | `mcp__chrome-devtools__*` | ✅ Preferred |
| Figma designs | `mcp__figma__*` | ✅ Preferred |

**Use with Caution**:

| Task | Tool | Note |
|------|------|------|
| GitHub PR/Issues | `mcp__github__create_pull_request` | ⚠️ PR creation only |
| GitHub queries | `mcp__github__get_*`, `mcp__github__list_*` | ⚠️ Read-only queries |
| Deployment | `mcp__vercel__*` | ⚠️ On-demand |

### ⚠️ Git Operations Rules (CRITICAL)

**MUST use terminal commands**:
```bash
git add / git commit / git push   # Local commits and push
git pull / git fetch              # Sync with remote
git branch / git checkout         # Branch operations
git merge / git rebase            # Merge operations
```

**NEVER use `mcp__github__push_files`**:
- Creates remote commits via API, **does NOT push local history**
- Causes local and remote history divergence
- Only suitable for scenarios **without local clone** (NOT this project)

**GitHub MCP allowed for**:
- `create_pull_request` - Create PRs
- `get_*` / `list_*` - Query information
- `create_issue` / `add_issue_comment` - Issue management

### Task Subagents

| Type | Purpose |
|------|---------|
| `Explore` | Codebase exploration, search |
| `Plan` | Architecture design, implementation planning |

## Code Conventions

- **TypeScript Strict Mode**: All code
- **Vue 3 Composition API**: `<script setup>` syntax
- **Cesium Viewer**: Must use `shallowRef`
- **Styles**: Use `_variables.scss`, no hardcoded colors

## Git Conventions

**Commit format**: `<type>(<scope>): <description>`

Types: `feat`, `fix`, `perf`, `docs`, `chore`, `test`, `refactor`

## Directory Structure

```
openspec/           # Change management
├── project.md      # Project context
├── changes/        # Change proposals and worklogs
└── specs/          # Requirement specs

devlogs/            # Development logs (by date)

.claude/
├── commands/       # Custom slash commands
└── skills/         # Domain knowledge skills

skills/             # [Migrating] -> .claude/skills/
```

## Important Reminders

1. **Parallel tool calls**: Independent operations should run in parallel for efficiency
2. **Skills auto-loading**: Claude auto-loads skills based on task relevance
3. **OpenSpec first**: Major changes need proposals before implementation
4. **Context management**: Use `/status` to monitor, `/clear` at 80%
