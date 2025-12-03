# Change: 添加实时数据推送与 ECharts 图表

## Why
当前系统使用轮询方式获取数据，存在延迟且效率低下。Dashboard 和 Simulation 页面的数据可视化仅有占位符，缺乏专业的时序数据图表展示。水利数字孪生平台需要实时监测能力和直观的数据趋势分析。

## What Changes
1. **后端 WebSocket 推送**：新增 WebSocket 端点，实时推送传感器数据和告警
2. **前端 WebSocket 客户端**：建立持久连接，接收实时数据更新
3. **ECharts 图表组件**：
   - 水位历史曲线（Dashboard）
   - 雨量柱状图（Dashboard）
   - 设备状态实时监控图（Device Manager）
   - 模拟结果时序图（Simulation）

## Impact
- Affected specs: `backend`, `dashboard`, `device-manager`, `simulation`
- Affected code:
  - `backend/app/main.py` - WebSocket 端点
  - `src/api/websocket.ts` - WebSocket 客户端
  - `src/components/business/WaterSituation.vue` - 水位图表
  - `src/components/business/KpiBoard.vue` - 雨量图表
  - `src/components/business/SimResult.vue` - 模拟结果图表
  - `src/components/business/DeviceTopology.vue` - 设备状态图
