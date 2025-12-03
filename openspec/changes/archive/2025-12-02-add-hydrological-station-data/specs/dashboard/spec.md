# dashboard Specification Delta

## ADDED Requirements

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
