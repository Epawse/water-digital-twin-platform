# 新对话模板

> 复制以下内容到新对话以恢复项目上下文

---

## 快速恢复（推荐）

```
请读取以下文件恢复项目上下文：

1. openspec/project.md
2. openspec/changes/add-gis-drawing-toolkit/worklog.md
3. devlogs/devlog-YYYY-MM-DD.md

然后告诉我当前状态和下一步建议。
```

> 注意：将 `YYYY-MM-DD` 替换为今天的日期

---

## 完整恢复

```
请完整恢复项目上下文：

1. 读取 openspec/project.md 了解项目技术栈
2. 运行 `openspec list` 查看当前变更
3. 读取活跃变更的 worklog.md
4. 读取今日 devlog（如有）
5. 总结当前状态和待办事项
```

---

## 特定任务恢复

### 继续 GIS 开发
```
恢复 GIS 绘图工具开发上下文：
1. openspec/changes/add-gis-drawing-toolkit/worklog.md
2. .claude/skills/cesium-webgis/SKILL.md
```

### 代码审查
```
审查最近的代码变更：
1. git log --oneline -10
2. git diff HEAD~3
```

---

## 自动化

CLAUDE.md 已配置，Claude Code 会自动：
- 加载项目上下文
- 识别相关 Skills
- 了解 OpenSpec 工作流

只需描述你的任务，Claude 会自动获取相关上下文。
