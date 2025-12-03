# Design: Hydrological Station Data Architecture

## Overview

本设计描述水文站数据的完整数据流：从 Excel 源文件到数据库模型，再到 API 输出和前端展示。

## Data Model

### New Models

```
┌─────────────────────────────────────────────────────────────────┐
│                     MonitoringFacility                          │
│ (facility_type = 'hydrological_station')                        │
└───────────────────────────┬─────────────────────────────────────┘
                            │ 1:N
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                     HydrologicalStation                         │
│ ─────────────────────────────────────────────────────────────── │
│ id, facility_id, station_code, station_name                     │
│ river_name, basin_name, cross_section (LINESTRING Z)            │
│ coord_x, coord_y, datum_elevation, is_simulated                 │
└───────────────────────────┬─────────────────────────────────────┘
                            │ 1:N
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Sensor                                  │
│ (sensor_type = 'radar_flow_meter' / 'manual_measurement')       │
│ point_code = station_code + suffix                              │
└───────────────────────────┬─────────────────────────────────────┘
                            │ 1:N
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                       SensorMetric                              │
│ ─────────────────────────────────────────────────────────────── │
│ metric_key: water_level | velocity | flow_rate | surface_elev   │
│ unit: m | m/s | m³/s | m                                        │
└───────────────────────────┬─────────────────────────────────────┘
                            │ 1:N
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SensorReading                              │
│ reading_time, value_num, quality_flag                           │
└─────────────────────────────────────────────────────────────────┘
```

### HydrologicalStation Model

```python
class HydrologicalStation(Base):
    __tablename__ = "hydrological_stations"

    id: int (PK)
    facility_id: int (FK -> monitoring_facilities.id)
    station_code: str (unique, e.g., "MQG")
    station_name: str ("马圈沟水文站")
    river_name: str | None ("马圈沟")
    basin_name: str | None ("乌鲁木齐河流域")
    cross_section: Geometry("LINESTRINGZ", srid=4549)  # CGCS2000 投影
    datum_elevation: float | None (基准高程)
    is_simulated: bool (default=False)
```

### Cross-Section Geometry

断面数据存储为 PostGIS `LINESTRINGZ`：
- 坐标系：CGCS2000 / 3-degree Gauss-Kruger zone 45 (EPSG:4549)
- 格式：`LINESTRING Z(X1 Y1 Z1, X2 Y2 Z2, ...)`

## Data Ingestion Flow

```
Excel Files                    Parser                      Database
─────────────                  ──────                      ────────
雷达流量计数据.xlsx  ──────►  parse_radar_flow()  ──────►  SensorReading
  └─ 日期时间                  - 5分钟间隔数据              (flow_rate, velocity,
  └─ 水位(m)                   - 自动创建 Sensor             water_level, surface_elev)
  └─ 流速(m/s)                 - 批量插入 readings
  └─ 瞬时流量(m³/s)
  └─ 水面高程(m)

日均流量过程线.xlsx  ──────►  parse_daily_flow()  ──────►  SensorReading
  └─ 日期                      - 日均汇总数据               (daily_flow_rate)
  └─ 日均流量(m³)

雷达流量计断面.xlsx  ──────►  parse_cross_section() ────►  HydrologicalStation
  └─ X坐标/m                   - 转换为 LINESTRINGZ         (cross_section geometry)
  └─ Y坐标/m
  └─ 高程/m

人工比测.xlsx       ──────►  parse_manual_cal()  ──────►  SensorReading
  └─ 时间                      - 创建 manual_measurement    (manual_flow_rate)
  └─ 人工比测值                  Sensor
  └─ 雷达值
```

## API Design

### New Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/hydrological_stations` | 获取水文站列表 |
| GET | `/api/v1/hydrological_stations/{id}` | 获取单个站点详情 |
| GET | `/api/v1/hydrological_stations/{id}/readings` | 获取站点历史数据 |
| GET | `/api/v1/flow_rates` | 获取最新流量数据（类似 water_levels） |

### Response Schema

```typescript
interface HydrologicalStationOut {
  id: number;
  station_code: string;
  station_name: string;
  river_name: string | null;
  basin_name: string | null;
  datum_elevation: number | null;
  is_simulated: boolean;
  latest_flow_rate: number | null;
  latest_velocity: number | null;
  latest_water_level: number | null;
  latest_time: string | null;
}
```

## Simulated Data Generation

基于马圈沟数据规范，生成模拟水文站：

1. **站点列表**：板房沟、红雁池、乌拉泊（设置 `is_simulated=true`）
2. **数据生成规则**：
   - 流量：基于马圈沟均值 ± 20% 随机波动
   - 流速：0.4 ~ 0.8 m/s 正态分布
   - 水位：0.1 ~ 0.3 m 随机
3. **时间序列**：5分钟间隔，回填最近7天数据

## Frontend Integration

### Dashboard Changes

1. **KpiBoard**：新增"流量监测站"指标卡
2. **WaterSituation**：添加流量趋势图（复用 WaterLevelChart 组件结构）
3. **WebSocket**：扩展 `sensor_update` 消息类型支持 `flow_rate`

## Migration Strategy

1. Alembic migration 创建 `hydrological_stations` 表
2. 运行导入脚本处理马圈沟数据
3. 运行模拟数据生成脚本
4. 前端组件更新
