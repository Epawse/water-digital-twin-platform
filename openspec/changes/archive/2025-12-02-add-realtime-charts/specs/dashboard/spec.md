## ADDED Requirements

### Requirement: Water Level Chart
The Dashboard SHALL display a real-time water level trend chart using ECharts.

#### Scenario: Chart Initialization
- **WHEN** the Dashboard loads
- **THEN** the WaterSituation panel displays a line chart with the last 24 hours of water level data

#### Scenario: Real-time Update
- **WHEN** a new water level reading arrives via WebSocket
- **THEN** the chart appends the new point and removes the oldest if exceeding 50 points

#### Scenario: Visual Style
- **WHEN** the chart renders
- **THEN** it uses a gradient fill matching `$neon-cyan` to `$neon-blue` with dark background

### Requirement: Rainfall Chart
The Dashboard SHALL display a rainfall distribution chart.

#### Scenario: Bar Chart Display
- **WHEN** the Dashboard loads
- **THEN** a bar chart shows rainfall by station with color-coded severity (blue < 10mm, yellow 10-25mm, red > 25mm)

#### Scenario: Tooltip Interaction
- **WHEN** the user hovers over a bar
- **THEN** a tooltip displays station name, rainfall value, and time

## MODIFIED Requirements

### Requirement: KPI Board
The system SHALL provide real-time input controls (sliders/inputs) for simulation parameters. Additionally, the KPI Board SHALL display a mini rainfall chart alongside numeric indicators.

#### Scenario: Data Display
- **WHEN** Dashboard is visible
- **THEN** Safety Days, Storage %, Online Devices, and Today Alerts are shown

#### Scenario: Rainfall Sparkline
- **WHEN** rainfall data is available
- **THEN** a mini sparkline chart appears below the "Today Alerts" card showing recent rainfall trend
