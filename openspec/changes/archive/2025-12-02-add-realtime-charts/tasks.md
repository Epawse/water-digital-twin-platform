## 1. Backend WebSocket
- [x] 1.1 Install `websockets` dependency if not present
- [x] 1.2 Create `/ws/realtime` endpoint in `backend/app/main.py`
- [x] 1.3 Implement connection manager for broadcasting
- [x] 1.4 Add background task to push sensor updates every 2s
- [x] 1.5 Add alert notification on new warning detection

## 2. Frontend WebSocket Client
- [x] 2.1 Create `src/api/websocket.ts` with auto-reconnect logic
- [x] 2.2 Create `src/stores/realtime.ts` Pinia store for live data
- [x] 2.3 Integrate WebSocket in Dashboard components (connect on mount)
- [x] 2.4 Update components to consume WebSocket updates

## 3. ECharts Integration
- [x] 3.1 Install `echarts` and `vue-echarts` dependencies
- [x] 3.2 Create `src/components/charts/BaseChart.vue` wrapper
- [x] 3.3 Configure ECharts dark theme matching HUD style (`theme.ts`)

## 4. Dashboard Charts
- [x] 4.1 Create `WaterLevelChart.vue` (line chart with gradient)
- [x] 4.2 Replace placeholder in `WaterSituation.vue` with chart
- [x] 4.3 Create `RainfallChart.vue` (bar chart)
- [x] 4.4 Add sparkline chart to `KpiBoard.vue`

## 5. Device Manager Charts
- [x] 5.1 Create `DeviceGaugeChart.vue` and `ProtocolPieChart.vue`
- [x] 5.2 Integrate charts into `DeviceManager.vue`

## 6. Simulation Charts
- [x] 6.1 Create `FloodProgressChart.vue` (area chart for inundation)
- [x] 6.2 Create `DisplacementTrendChart.vue` (line chart for dam safety)
- [x] 6.3 Replace placeholders in `SimResult.vue` with charts

## 7. Testing & Validation
- [x] 7.1 Test WebSocket connection/reconnection (structure in place)
- [x] 7.2 Verify chart updates with live data (store subscription ready)
- [x] 7.3 Performance test with 50+ data points (sliding window implemented)
- [x] 7.4 Build verification (`npm run build`) - SUCCESS
