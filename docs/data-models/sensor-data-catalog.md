# Sensor Data Catalog

## Overview

This document provides a comprehensive catalog of sensor data ingested into the PostgreSQL database from Excel files located in `backend/data/`. It serves as the authoritative reference for understanding sensor types, metrics, data coverage, and data quality.

**Database Connection**: See `backend/.env` for connection details.

---

## Data Summary

| Metric | Value | Note |
|--------|-------|------|
| **Total Files Ingested** | 77 | From `ingest_files` table |
| **Real Sensor Readings** | 1,997,436 | `is_simulated=false` in `sensor_readings` |
| **Simulated Readings** | 24,226 | For testing purposes, can be ignored |
| **Monitoring Sections** | 6 | 2 with real data, 4 simulated |
| **Sensor Types** | 13 | Including radar, pressure, strain, temperature sensors |

---

## Data Coverage by Section

### Real Data Sections

| Section | Readings | Time Range | Frequency | Status |
|---------|----------|------------|-----------|--------|
| **发电引水洞 (Power Diversion Tunnel)** | 1,950,208 | 2022-09-02 → 2025-10-11 13:00 | 60 minutes | ✅ Production |
| **马圈沟主断面 (MQG Main Cross-Section)** | 47,228 | 2025-08-29 → 2025-10-31 13:20 | 5 minutes (radar) + 1 manual | ✅ Production |

### Simulated Data Sections

| Section | Readings | Time Range | Status |
|---------|----------|------------|--------|
| 板房沟水文站 | 8,068 × 3 | 2025-11-25 → 2025-12-02 | ⚠️ Simulated |
| 红雁池水文站 | (same) | (same) | ⚠️ Simulated |
| 乌拉泊水文站 | (same) | (same) | ⚠️ Simulated |

> **Note**: Simulated stations are mentioned in reporting but marked as synthetic data.

---

## Sensor Types & Metrics

### Summary Table

| Sensor Type | Count | Metrics | Readings | Time Range | Typical Frequency |
|-------------|-------|---------|----------|------------|-------------------|
| 钢板计 (Steel Plate Gauge) | 32 | 128 | 4,050,804 | 2022-09-02 → 2025-10-11 | 60 min |
| 钢筋应力计 (Rebar Stress Meter) | 11 | 44 | 1,306,944 | 2022-09-02 → 2025-10-11 | 60 min |
| 渗压计 (Pore Pressure Gauge) | 11 | 33 | 709,659 | 2022-10-09 → 2025-10-11 | 60 min |
| 四点式变位计 (4-Point Displacement) | 8 | 16 | 217,724 | 2025-01-01 → 2025-10-11 | 60 min |
| 测缝计 (Joint Meter) | 6 | 12 | 163,304 | 2025-01-01 → 2025-10-11 | 60 min |
| 锚杆应力计 (Anchor Stress Meter) | 2 | 8 | 217,728 | 2025-01-01 → 2025-10-11 | 60 min |
| 无应力计 (No-Stress Meter) | 2 | 8 | 217,728 | 2025-01-01 → 2025-10-11 | 60 min |
| 温度计 (Thermometer) | 2 | 6 | 81,648 | 2025-01-01 → 2025-10-11 | 60 min |
| 二点式变位计 (2-Point Displacement) | 2 | 4 | 54,424 | 2025-01-01 → 2025-10-11 | 60 min |
| 电测水位计 (Electric Water Level) | 1 | 3 | 61,236 | 2025-01-01 → 2025-10-11 | 60 min |
| 雷达流量计 (Radar Flow Meter) | 1 | 5 | 236,135 | 2025-08-29 → 2025-10-31 | 5 min |
| 人工测量 (Manual Measurement) | 1 | 1 | 1 | 2025-09-30 14:35 | Single point |

---

## Metric Definitions

### Steel Plate Gauge (钢板计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `resistance_ratio` | 电阻比 | — | Resistance ratio |
| `resistance_sum` | 电阻和 | — | Resistance sum |
| `strain` | 应变 | 10⁻⁶ | Structural strain |
| `temperature` | 温度 | ℃ | Temperature reading |

### Rebar Stress Meter (钢筋应力计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `resistance_ratio` | 电阻比 | — | Resistance ratio |
| `resistance_sum` | 电阻和 | — | Resistance sum |
| `stress` | 应力 | MPa | Stress on rebar |
| `temperature` | 温度 | ℃ | Temperature reading |

### Pore Pressure Gauge (渗压计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `pore_pressure` | 孔隙水压 | kPa | Pore water pressure |
| `freq_modulus` | 频率模数 | KHz² | Frequency modulus |
| `temperature` | 温度 | ℃ | Temperature reading |

### Displacement Meters (变位计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `displacement` | 位移 | mm | Displacement measurement |
| `resistance_ratio` | 电阻比 | — | Resistance ratio |

### Joint Meter (测缝计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `displacement` | 位移 | mm | Joint displacement |
| `resistance_ratio` | 电阻比 | — | Resistance ratio |

### Anchor Stress Meter (锚杆应力计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `stress` | 应力 | MPa | Anchor stress |
| `temperature` | 温度 | ℃ | Temperature reading |
| `resistance_ratio` | 电阻比 | — | Resistance ratio |
| `temperature_resistance` | 温度电阻 | — | Temperature resistance |

### No-Stress Meter (无应力计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `strain` | 应变 | 10⁻⁶ | Strain measurement |
| `temperature` | 温度 | ℃ | Temperature reading |
| `resistance_ratio` | 电阻比 | — | Resistance ratio |
| `temperature_resistance` | 温度电阻 | — | Temperature resistance |

### Thermometer (温度计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `temperature` | 温度 | ℃ | Temperature |
| `temperature_measured` | 温度 | ℃ | Measured temperature |
| `resistance` | 电阻 | Ω | Resistance |

### Electric Water Level (电测水位计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `water_level` | 水位 | m | Water level |
| `temperature` | 温度 | ℃ | Temperature reading |
| `freq_modulus` | 频率模数 | KHz² | Frequency modulus |

### Radar Flow Meter (雷达流量计)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `water_level` | 水位 | m | Water level |
| `velocity` | 流速 | m/s | Flow velocity |
| `flow_rate` | 瞬时流量 | m³/s | Instantaneous flow rate |
| `surface_elevation` | 水面高程 | m | Water surface elevation |
| `daily_flow_rate` | 日均流量 | m³ | Daily average flow |

### Manual Measurement (人工测量)

| metric_key | Name | Unit | Description |
|------------|------|------|-------------|
| `manual_flow_rate` | 人工比测流量 | m³/s | Manual calibration flow rate |

---

## Sample Data

### Steel Plate Gauge (GBcg-27)

| Time | Metric | Value | Unit |
|------|--------|-------|------|
| 2022-09-02 00:00 | resistance_ratio | 78.47 | — |
| 2022-09-02 00:00 | temperature | 24.402 | ℃ |
| 2022-09-02 00:00 | resistance_sum | 10282 | — |

### Radar Flow Meter (MQG_RADAR)

| Time | Metric | Value | Unit |
|------|--------|-------|------|
| 2025-08-29 00:00 | daily_flow_rate | 114495.1688 | m³ |
| 2025-08-30 00:00 | daily_flow_rate | 113768.3051 | m³ |
| 2025-08-31 00:00 | daily_flow_rate | 111176.4281 | m³ |

### Manual Measurement (MQG_MANUAL)

| Time | Metric | Value | Unit |
|------|--------|-------|------|
| 2025-09-30 14:35 | manual_flow_rate | 0.651 | m³/s |

---

## Database Schema

### Key Tables

#### monitoring_facilities
Monitoring facilities (e.g., "MMK 发电引水洞", "马圈沟水文监测设施")

**Fields**: `code`, `name`, `facility_type`, `location`

#### monitoring_sections
Sections within facilities (e.g., SEC-1=发电引水洞, MQG_MAIN=马圈沟主断面)

**Fields**: `code`, `name`, `section_type`, `chainage`, `is_simulated`

#### sensor_types
Sensor type definitions (13 types total)

**Fields**: `code`, `name`, `unit`, `prefix_pattern`, `description`, `is_simulated`

#### sensors
Individual sensor instances linked to sections/types

**Key Fields**:
- `point_code`: Sensor identifier (e.g., "GBcg-27")
- `factory_code`: Manufacturer code
- `install_chainage_raw`: Installation chainage (raw format from Excel)
- `install_elevation`: Installation elevation
- `install_date`: Installation date
- `install_location_desc`: Installation location description
- `instrument_model`: Instrument model
- `instrument_manufacturer`: Manufacturer
- `reading_device`: Reading device type
- `status`: Active/Inactive status
- `location`: PostGIS Point geometry
- `is_simulated`: Real vs simulated flag

#### sensor_metrics
Metrics under each sensor (with units and alarm thresholds)

**Fields**: `metric_key`, `name_cn`, `unit`, `data_type`, `warn_low`, `warn_high`, `is_simulated`

#### sensor_readings
Main data table for all sensor readings

**Key Fields**:
- `reading_time`: UTC timestamp
- `value_num` / `value_text`: Numeric or text value
- `unit`: Measurement unit
- `raw_values`: Original column data as JSON
- `quality_flag`: Data quality indicator
- `remark`: Additional notes
- `source_file_id`: Reference to ingested file
- `is_simulated`: Real vs simulated flag

**Unique Constraint**: `(metric_id, reading_time, source_file_id)`

#### ingest_files
File ingestion tracking and deduplication

**Fields**: `path`, `sheet`, `checksum`, `file_mtime`, `rows_imported`, `status`, `message`, `is_simulated`

#### hydrological_stations
Hydrological station information (e.g., MQG) with cross-section geometry

**Includes**: Cross-section coordinates (PostGIS)

#### chainage_coordinates
Chainage → coordinate/elevation mapping for sensor positioning

---

## Data Quality Notes

### Parsing & Cleaning

- **Excel Headers**: Preserve manufacturer information; sensor names may be long
- **Standardized Names**: Consider adding normalized names in `sensors` table for frontend display
- **Multi-Metric Records**: Same timestamp often contains multiple metrics (resistance, temperature, etc.) - split into separate `metric` entries; `raw_values` preserves original columns for traceability
- **Time Cleaning**: Import filters out pre-1990 values to avoid header row dates interfering with actual data
- **Time Series Continuity**: Can be directly queried by sorting on `reading_time`

### Data Completeness

| Aspect | Status | Note |
|--------|--------|------|
| **Sensor Naming** | ⚠️ Original | Long names with chainage/elevation embedded |
| **Sensor Coordinates** | ⚠️ Partial | Some sensors have `location` geometry, others pending |
| **Missing Data** | ✅ Tracked | Can generate completeness/gap statistics per sensor type |
| **Alarm Thresholds** | ⚠️ Partial | Some metrics have `warn_low`/`warn_high` configured |

---

## Future Enhancements

Potential additions for operational needs:

1. **Time Series Completeness Analysis**: Generate per-sensor-type gap/missing-data statistics
2. **Sensor Renaming**: Add standardized display names and coordinate completion
3. **Threshold Configuration**: Configure alarm thresholds for critical metrics
4. **Reporting Exports**: Export charts (PNG/CSV) for project reporting

---

## References

### Source Data
- **Location**: `backend/data/` (77 Excel files)
- **Database**: PostgreSQL (connection in `backend/.env`)
- **Ingestion Scripts**: `backend/scripts/` (for data loading)

### Related Specifications
- [Backend Specification](../../openspec/specs/backend/spec.md) - API requirements for sensor data
- [Data Governance Specification](../../openspec/specs/data-governance/spec.md) - Data management UI requirements

---

**Document Version**: 1.0
**Created**: 2025-12-05 (migrated from `docs/real-data-summary.md`)
**Maintained By**: Water Digital Twin Team
**Source**: PostgreSQL database analysis + Excel file catalog
