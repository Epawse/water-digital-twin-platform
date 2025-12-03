# dashboard Specification

## Purpose
TBD - created by archiving change implement-dashboard. Update Purpose after archive.
## Requirements
### Requirement: Dashboard Layout
The Dashboard SHALL display a dual-sidebar layout overlaid on the 3D map.
- **Left Sidebar**: Contains Running Overview (KPI), Future Trend (Weather), and Resource Layers.
- **Right Sidebar**: Contains Real-time Water Situation, Field Monitoring (CCTV), and AI Assistant.

#### Scenario: Default View
- **WHEN** the user lands on the home page
- **THEN** both left and right sidebars are visible
- **AND** the center area remains clear for the 3D map

### Requirement: KPI Board
The system SHALL provide real-time input controls (sliders/inputs) for simulation parameters. Additionally, the KPI Board SHALL display a mini rainfall chart alongside numeric indicators.

#### Scenario: Data Display
- **WHEN** Dashboard is visible
- **THEN** Safety Days, Storage %, Online Devices, and Today Alerts are shown

#### Scenario: Rainfall Sparkline
- **WHEN** rainfall data is available
- **THEN** a mini sparkline chart appears below the "Today Alerts" card showing recent rainfall trend

### Requirement: Weather Trend
The system SHALL display weather forecast for the next 3 days.

#### Scenario: Weather Icons
- **WHEN** viewing the weather strip
- **THEN** icons for Today, Tomorrow, and Day 3 are shown with precipitation values

### Requirement: CCTV Monitoring
The system SHALL provide a video player interface for monitoring key locations (Spillway, Dam Crest).

#### Scenario: Video Placeholder
- **WHEN** in prototype mode
- **THEN** static images or noise placeholders are shown instead of live streams
- **AND** a "Play" icon is overlaid

### Requirement: AI Assistant
The system SHALL provide a chat interface for querying situational information.

#### Scenario: Message History
- **WHEN** the dashboard loads
- **THEN** a welcome message or recent alert (e.g., "Heavy rain detected") is displayed in the chat log

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

### Requirement: Flow Rate Chart
The Dashboard SHALL display a flow rate trend chart showing real-time hydrological station data.

#### Scenario: Chart Initialization
- **WHEN** the Dashboard loads
- **THEN** a FlowRateChart component renders with the last 20 flow rate readings

#### Scenario: Real-time Update
- **WHEN** a `sensor_update` WebSocket message with metric="flow_rate" is received
- **THEN** the chart appends the new data point and removes the oldest if exceeding 50 points

#### Scenario: Visual Style
- **THEN** the chart uses a cyan gradient area fill matching the HUD theme

### Requirement: Hydrological Station KPI
The KPI Board SHALL display flow monitoring station statistics.

#### Scenario: Station Count Display
- **WHEN** viewing the KPI Board
- **THEN** a card shows "流量监测站" with total count and online status
- **AND** the count distinguishes between real (`is_simulated=false`) and simulated stations

### Requirement: Water Situation Panel
The Water Situation panel SHALL include a flow rate monitoring section for hydrological stations.

#### Scenario: Flow Rate Section
- **WHEN** viewing Water Situation panel
- **THEN** a "流量监测" section displays with FlowRateChart and latest station readings

