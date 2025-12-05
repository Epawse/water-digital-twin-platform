# New Session Template

When starting a new Claude Code session due to context window limitations, use this template to quickly restore project state.

---

## Standard Opening (Chinese)

```
请读取以下文件恢复项目上下文：

1. openspec/project.md - 项目整体上下文
2. openspec/changes/add-gis-drawing-toolkit/worklog.md - 当前工作进度
3. devlogs/devlog-YYYY-MM-DD.md - 最近的开发日志

然后告诉我：
- 当前正在进行的变更和状态
- 最近完成的工作
- 下一步建议的任务
```

---

## Detailed Opening (If Needed)

```
请按以下顺序读取文件恢复项目状态：

【项目级上下文】
1. openspec/project.md - 项目背景、技术栈、Git规范

【当前工作】
2. openspec/changes/add-gis-drawing-toolkit/proposal.md - 需求和范围
3. openspec/changes/add-gis-drawing-toolkit/design.md - 架构决策
4. openspec/changes/add-gis-drawing-toolkit/worklog.md - 最新进度和决策
5. openspec/changes/add-gis-drawing-toolkit/tasks.md - 任务清单

【最近历史】
6. devlogs/devlog-2025-12-05.md - 最近的开发日志

【知识库】（如果需要Cesium相关工作）
7. skills/cesium-webgis/SKILL.md - Cesium知识库概览

然后：
- 总结当前项目状态
- 识别未完成的任务
- 建议下一步工作
```

---

## Minimal Opening (Quick Resume)

```
恢复项目状态：
- 读取 openspec/changes/add-gis-drawing-toolkit/worklog.md
- 读取最新的 devlog

告诉我下一步应该做什么。
```

---

## Context Restoration Priority

### P0 - Essential (Always Read)
1. **openspec/project.md** - Project context, tech stack, conventions
2. **Current change worklog** - `openspec/changes/<change-id>/worklog.md`
3. **Recent devlog** - `devlogs/devlog-YYYY-MM-DD.md`

### P1 - Important (Read if needed)
4. **Proposal** - `openspec/changes/<change-id>/proposal.md`
5. **Design** - `openspec/changes/<change-id>/design.md`
6. **Tasks** - `openspec/changes/<change-id>/tasks.md`

### P2 - Reference (Read if specific questions)
7. **Docs** - Relevant files in `docs/`
8. **Skills** - Relevant files in `skills/cesium-webgis/resources/`

---

## Example Opening Messages

### Example 1: Continue Current Work

```
继续之前的工作，请读取：
1. openspec/changes/add-gis-drawing-toolkit/worklog.md
2. devlogs/devlog-2025-12-05.md

我想继续实现Phase 8的地图选择功能。
```

### Example 2: Start New Task

```
开始新任务，请先读取：
1. openspec/project.md
2. openspec/changes/add-gis-drawing-toolkit/worklog.md
3. openspec/changes/add-gis-drawing-toolkit/tasks.md

我想从tasks.md中选择下一个任务开始。
```

### Example 3: Debug Issue

```
需要调试问题，请读取：
1. openspec/changes/add-gis-drawing-toolkit/worklog.md
2. skills/cesium-webgis/resources/performance.md

我遇到了Cesium性能问题需要解决。
```

### Example 4: Review and Plan

```
回顾和规划，请读取：
1. openspec/project.md
2. openspec/changes/add-gis-drawing-toolkit/worklog.md
3. devlogs/devlog-2025-12-05.md

帮我分析当前进度并规划下一阶段工作。
```

---

## What Claude Will Do

After reading the specified files, Claude should:

1. **Summarize Current State** (in Chinese)
   - Active changes and their status
   - Recent work completed
   - Key decisions made

2. **Identify Next Steps**
   - Pending tasks from tasks.md
   - Open questions from worklog.md
   - Recommendations based on progress

3. **Clarify if Needed**
   - Ask about priorities if multiple options exist
   - Confirm assumptions about what to work on

---

## Important Notes

### ✅ DO

- Always read worklog.md and recent devlog
- Ask Claude to summarize before starting work
- Reference specific files you want Claude to read
- Use Chinese for instructions to Claude
- Be specific about what task you want to work on

### ❌ DON'T

- Don't rely on chat history - it's gone
- Don't assume Claude knows what you were working on
- Don't skip reading worklog.md
- Don't try to explain everything manually - let files do the work
- Don't re-import archived chat logs

---

## File Reading Guidelines

### Core Context Files (Always Current)

| File | Purpose | When to Read |
|------|---------|--------------|
| `openspec/project.md` | Project context | Every new session |
| `worklog.md` | Current progress | Every new session |
| `devlog-YYYY-MM-DD.md` | Recent history | When continuing work |
| `proposal.md` | Requirements | When unclear about goals |
| `design.md` | Architecture | When making technical decisions |
| `tasks.md` | Task list | When choosing next task |

### Reference Files (As Needed)

| File | Purpose | When to Read |
|------|---------|--------------|
| `docs/**/*.md` | Technical docs | When implementing specific features |
| `skills/**/*.md` | Domain knowledge | When using Cesium/WebGIS |
| `legacy/**` | Historical reference | When investigating past decisions |

---

## Template for Checkpoint Before Ending Session

When approaching context limit, Claude should update:

1. **worklog.md** - Latest progress and decisions
2. **tasks.md** - Mark completed tasks
3. **devlog-YYYY-MM-DD.md** - Add session summary

Then tell you:
```
上下文即将用尽，已更新：
- worklog.md: 当前进度和决策
- tasks.md: 已完成任务标记
- devlog: Session总结

下次开始新对话时，请使用以下开场白：

【开场白内容】
```

---

## Quick Reference Card

**Standard Opening**:
```
读取 openspec/changes/<change-id>/worklog.md 和最新devlog，
总结当前状态并建议下一步。
```

**Full Context Restore**:
```
读取 openspec/project.md, worklog.md, devlog-YYYY-MM-DD.md,
tasks.md，然后总结项目状态。
```

**Minimal Resume**:
```
读 worklog.md，我想继续 [具体任务]。
```

---

**Remember**: Files are your memory. The more specific you are about which files to read, the faster Claude can restore context and start working.
