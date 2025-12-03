# Change: Implement AI Engineering

## Why
The "AI Engineering" module is a dedicated workspace for managing the RAG (Retrieval-Augmented Generation) knowledge base and debugging the Large Language Model (LLM) prompts. It uses "Focus Mode" with a split layout: Knowledge Base (Left) and Prompt Debugger (Right).

## What Changes
- Implement `AiEngineering.vue` using `ModalBox.vue`.
- Create `RagKnowledgeBase.vue`: Drag-and-drop area for PDF/Word uploads and a list of indexed documents.
- Create `PromptDebugger.vue`: A split pane with System Prompt editor (top) and Chat Playground (bottom).
- No complex backend logic; UI will be mocked.

## Impact
- Affected specs: `ai-engineering`
- Affected code: `src/views/AiEngineering.vue`, `src/components/business/`
