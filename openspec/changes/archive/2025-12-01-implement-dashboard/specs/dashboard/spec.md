## ADDED Requirements
### Requirement: Dashboard Layout
The Dashboard SHALL display a dual-sidebar layout overlaid on the 3D map.
- **Left Sidebar**: Contains Running Overview (KPI), Future Trend (Weather), and Resource Layers.
- **Right Sidebar**: Contains Real-time Water Situation, Field Monitoring (CCTV), and AI Assistant.

#### Scenario: Default View
- **WHEN** the user lands on the home page
- **THEN** both left and right sidebars are visible
- **AND** the center area remains clear for the 3D map

### Requirement: KPI Board
The system SHALL display key operational metrics including Safe Running Days and Current Water Storage %.

#### Scenario: Data Display
- **WHEN** the dashboard loads
- **THEN** "Safe Running Days" shows a numeric value (e.g., 2140)
- **AND** "Current Storage" shows a percentage (e.g., 76%)

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
