## Context
水利数字孪生平台需要实时监测和专业数据可视化能力。当前实现存在以下问题：
1. 前端通过 HTTP 轮询获取数据，延迟高、服务器负载大
2. 数据展示以文本和简单占位符为主，缺乏时序趋势分析
3. 告警通知不及时，用户体验差

## Goals / Non-Goals
- **Goals**:
  - 实现毫秒级数据推送（WebSocket）
  - 提供专业的水利领域数据图表（ECharts）
  - 保持 HUD 沉浸式视觉风格一致性
- **Non-Goals**:
  - 本次不实现历史数据回放功能
  - 不涉及 3D 地图上的数据叠加展示

## Decisions

### 1. WebSocket 技术选型
- **Decision**: 使用 FastAPI 原生 WebSocket 支持
- **Alternatives considered**:
  - Socket.IO: 功能更全但引入额外依赖
  - Server-Sent Events (SSE): 单向通信，不支持双向交互
- **Rationale**: FastAPI WebSocket 简单、高效，与现有后端架构一致

### 2. 图表库选型
- **Decision**: 使用 ECharts 5.x（按需导入）
- **Alternatives considered**:
  - Chart.js: 轻量但定制能力弱
  - D3.js: 灵活但学习成本高
- **Rationale**: ECharts 支持丰富的水利图表类型，深色主题支持好，与 project.md 约定一致

### 3. 数据推送架构
- **Decision**: 单一 WebSocket 连接，通过消息类型区分数据
- **Message Types**:
  - `sensor_update`: 传感器读数更新
  - `alert_new`: 新告警通知
  - `device_status`: 设备状态变更
- **Rationale**: 减少连接数，简化客户端管理

### 4. 图表更新策略
- **Decision**: 滑动窗口 + 节流更新
- **Window Size**: 最近 50 个数据点
- **Throttle**: 图表最多每 500ms 重绘一次
- **Rationale**: 平衡实时性与渲染性能

## Risks / Trade-offs
| Risk | Mitigation |
|------|------------|
| WebSocket 连接断开 | 实现自动重连机制（指数退避） |
| 大量数据导致图表卡顿 | 滑动窗口限制 + 节流更新 |
| 深色主题图表可读性 | 使用高对比度配色，参考 `_variables.scss` |

## Migration Plan
1. 后端新增 WebSocket 端点（向后兼容，HTTP API 保留）
2. 前端新增 WebSocket 服务，不影响现有轮询逻辑
3. 逐步替换组件中的占位符为 ECharts 图表
4. 验证后移除轮询代码

## Open Questions
- 是否需要支持多房间/频道订阅？（当前设计为全量推送）
