## ADDED Requirements
### Requirement: RAG Knowledge Base Management
The system SHALL provide an interface to upload and list documents (PDF, Word) used for RAG indexing.

#### Scenario: File Listing
- **WHEN** viewing the Knowledge Base
- **THEN** a list of documents is shown with their indexing status ("Indexed")
- **AND** icons differentiate PDF vs Word files

### Requirement: Prompt Engineering Workspace
The system SHALL provide a workspace to edit the System Prompt and test it in a chat playground.

#### Scenario: Playground Interaction
- **WHEN** the user types a question in the playground
- **THEN** the AI response simulates a retrieval process (showing citation source)
