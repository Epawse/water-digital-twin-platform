# Proposal: Add Hydrological Station Data

## Summary

新增水文站数据导入能力，以马圈沟水文站为首个真实数据源。支持雷达流量计时序数据、断面几何（PostGIS）、人工比测校核数据的结构化入库，并可基于该规范模拟生成其他虚拟水文站数据。

## Motivation

当前系统仅有模拟数据，缺乏真实水文站数据支撑。马圈沟水文站提供了完整的雷达流量计监测数据（水位、流速、瞬时流量、水面高程）、断面测量几何、日均流量汇总及人工比测校核记录，是验证数据治理和实时监测功能的理想数据源。

## Scope

### In Scope
1. **数据模型扩展**：新增 `HydrologicalStation`（水文站）实体与断面几何 PostGIS 存储
2. **数据导入脚本**：Excel 解析器，将马圈沟数据导入数据库
3. **API 扩展**：新增水文站流量查询 API
4. **模拟数据生成**：基于马圈沟数据规范生成其他模拟站点
5. **前端展示**：Dashboard 中展示流量数据图表

### Out of Scope
- 实时数据采集接口（本次仅处理历史批量数据）
- 复杂的数据质量校验规则（后续迭代）

## Design Decisions

1. **统一站点管理**：新建 `HydrologicalStation` 模型，作为水文站专用实体，关联到 `MonitoringFacility`
2. **断面几何存储**：使用 PostGIS `LINESTRING Z` 存储测验断面，支持三维可视化
3. **指标扩展**：新增 `flow_rate`（流量）、`velocity`（流速）、`surface_elevation`（水面高程）等水文专用指标
4. **模拟标记**：所有实体通过 `is_simulated` 字段区分真实/模拟数据

## References

- 马圈沟水文站数据目录：`backend/data/马圈沟水文站/`
- 现有 Sensor 模型：`backend/app/models/sensor.py`
