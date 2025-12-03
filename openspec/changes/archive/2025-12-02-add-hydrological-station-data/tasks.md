## 1. Database Schema
- [x] 1.1 Create `HydrologicalStation` model in `backend/app/models/hydrological.py`
- [x] 1.2 Add `radar_flow_meter` and `manual_measurement` to `SensorType` seed data
- [x] 1.3 Generate Alembic migration for `hydrological_stations` table
- [x] 1.4 Run migration against PostgreSQL

## 2. Data Ingestion Scripts
- [x] 2.1 Create `backend/scripts/ingest_hydrological.py` main entry point
- [x] 2.2 Implement `parse_radar_flow()` for 雷达流量计数据 Excel
- [x] 2.3 Implement `parse_cross_section()` for 断面几何 → PostGIS LINESTRINGZ
- [x] 2.4 Implement `parse_daily_flow()` for 日均流量汇总
- [x] 2.5 Implement `parse_manual_calibration()` for 人工比测数据
- [x] 2.6 Test ingestion with 马圈沟 data files

## 3. Simulated Station Generator
- [x] 3.1 Create `backend/scripts/generate_simulated_stations.py`
- [x] 3.2 Define simulated station configs (板房沟, 红雁池, 乌拉泊)
- [x] 3.3 Generate 7-day historical readings based on 马圈沟 data patterns
- [x] 3.4 Insert simulated data with `is_simulated=True`

## 4. Backend API
- [x] 4.1 Create `backend/app/api/hydrological.py` router
- [x] 4.2 Implement `GET /api/v1/hydrological_stations` endpoint
- [x] 4.3 Implement `GET /api/v1/hydrological_stations/{id}/readings` endpoint
- [x] 4.4 Implement `GET /api/v1/flow_rates` endpoint (latest readings)
- [x] 4.5 Add schemas in `backend/app/schemas/hydrological.py`
- [x] 4.6 Register router in `backend/app/api/router.py`

## 5. WebSocket Extension
- [x] 5.1 Update `realtime_push_task` to include flow_rate metrics
- [x] 5.2 Test WebSocket broadcast with new metric types

## 6. Frontend Integration
- [x] 6.1 Add `FlowRateChart.vue` component (line chart for 流量)
- [ ] 6.2 Update `KpiBoard.vue` to show flow monitoring station count (skipped - low priority)
- [x] 6.3 Update `WaterSituation.vue` to include flow rate panel
- [x] 6.4 Update `src/stores/realtime.ts` to handle `flow_rate` updates
- [x] 6.5 Add API client in `src/api/hydrological.ts`

## 7. Validation & Testing
- [x] 7.1 Verify database schema with `psql` queries
- [x] 7.2 Test API endpoints with `curl` / httpie
- [x] 7.3 Verify frontend charts display real + simulated data
- [x] 7.4 Run `npm run build` to ensure no TypeScript errors
