# CLAUDE.md

> Claude Code 自动加载此文件作为项目上下文

## 项目概述

**水利数字孪生基础平台** - Vue 3 + TypeScript + CesiumJS 3D GIS 应用

详细信息见: `openspec/project.md`

## 上下文恢复

新对话开始时，读取以下文件恢复上下文：

```
1. openspec/project.md          # 项目技术栈和约定
2. openspec/changes/*/worklog.md # 当前进行中的变更
3. devlogs/devlog-YYYY-MM-DD.md  # 今日开发日志
```

## 工作流

### OpenSpec 变更管理

```
/openspec:proposal <title>  # 创建变更提案（不写代码）
/openspec:apply <id>        # 实施已批准的变更
/openspec:archive <id>      # 归档完成的变更
```

详见: `openspec/AGENTS.md`

### Skills 知识库

项目配置了领域知识技能，Claude 会自动根据任务相关性加载：

- **cesium-webgis**: Cesium 3D GIS 最佳实践 (`.claude/skills/cesium-webgis/`)

### MCP 工具使用

| 任务 | 工具 |
|-----|------|
| 查询库文档 | `mcp__context7__get-library-docs` |
| GitHub PR/Issues | `mcp__github__*` |
| 浏览器调试 | `mcp__chrome-devtools__*` |
| 部署 | `mcp__vercel__*` |

### Task 子代理

| 类型 | 用途 |
|-----|------|
| `Explore` | 代码库探索、搜索 |
| `Plan` | 架构设计、实施规划 |

## 代码约定

- **TypeScript 严格模式**: 所有代码
- **Vue 3 Composition API**: `<script setup>` 语法
- **Cesium Viewer**: 必须使用 `shallowRef`
- **样式**: 使用 `_variables.scss`，禁止硬编码颜色

## Git 约定

**Commit 格式**: `<type>(<scope>): <description>`

类型: `feat`, `fix`, `perf`, `docs`, `chore`, `test`, `refactor`

## 目录结构

```
openspec/           # 变更管理
├── project.md      # 项目上下文
├── changes/        # 变更提案和工作日志
└── specs/          # 需求规格

devlogs/            # 开发日志（按日期）

.claude/
├── commands/       # 自定义斜杠命令
└── skills/         # 领域知识技能

skills/             # [迁移中] -> .claude/skills/
```

## 重要提醒

1. **并行工具调用**: 独立操作应并行执行以提高效率
2. **Skills 自动加载**: Claude 根据任务自动判断是否加载 skill
3. **OpenSpec 优先**: 重大变更先创建提案，再实施
4. **上下文管理**: 使用 `/status` 监控，80% 时 `/clear`
