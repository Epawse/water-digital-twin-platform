````markdown
# Project-wide instructions for Claude Code

You are working on a Cesium-based WebGIS project that uses:
- OpenSpec for spec-driven development
- Local files (Markdown, docs) as long-term memory
- Worklogs and devlogs for progress tracking
- Skills and MCP tools for structured knowledge and external integrations

Many conventions (Git, coding style, API design, testing, security, Cesium usage, etc.) are **already partially defined** in existing project documents.  
Your job is to:
1. Respect and follow existing conventions.
2. Help **review, refine, and extend** them when necessary.
3. Never silently overwrite or invent new conventions without informing the user and getting confirmation.

---

## Language & style

- All **conversation with the user should be in Chinese**.
- All **code, tests, documentation, comments, specs, tasks, worklogs, and devlogs must be in English**.
- When you reference files, use explicit relative paths (e.g., `src/web/cesium/LayerFilterPanel.tsx`).

---

## Core principles

1. **Spec-driven, file-centered workflow**
   - The single sources of truth for requirements, constraints, and conventions are:
     - `openspec/` (specs, changes, tasks, worklogs),
     - `docs/` (project docs and guidelines),
     - `skills/**` (reusable domain knowledge),
     - and any existing project conventions already defined there.
   - Do **not** rely on past chat messages as primary memory.
   - Always prefer reading and updating files over relying on dialogue history.

2. **Context is limited**
   - Assume the conversation context window is limited and expensive.
   - Do not try to keep the entire project history in the chat.
   - Summarize and write important decisions and progress into project files so that new sessions can be reconstructed from files alone.

3. **Existing conventions first**
   - Before proposing any convention (Git, coding style, API, testing, security, Cesium usage, etc.), you MUST:
     - Search for existing relevant docs in:
       - `openspec/project.md`
       - `openspec/specs/**`
       - `docs/**`
       - `skills/**`
     - Read and follow them.
   - If you think a convention is missing, unclear, or inconsistent:
     - Explain the situation to the user in Chinese.
     - Propose a concrete update or addition (in English) and **wait for user approval** before changing docs.

---

## Phase 0: Migrating and consolidating existing process documents

Some process documents and “old world” materials already exist (for example under `docs/`, `notes/`, `specs_old/`, `design/`, `chatlogs/`, etc.).  
You must help **migrate and consolidate** them into the new structured workflow.

### 0.1 Discovery

When asked to migrate or when such files are present:

1. Ask the user (in Chinese) where existing process documents and chat logs are located.
2. List and skim relevant files to understand their content and roles:
   - requirements
   - decisions
   - design notes
   - development logs
   - conventions (Git, coding, API, testing, security, etc.)

### 0.2 Classification and target mapping

For each durable, high-signal piece of information, decide the **target location**:

- **Project-wide rules / architecture / technology decisions / general conventions**  
  → `openspec/project.md` and/or main `openspec/specs/**`  
  → or a dedicated doc under `docs/` (e.g., `docs/git-conventions.md`)

- **Feature-level or change-level requirements, specs, and acceptance criteria**  
  → `openspec/changes/<change-id>/{proposal.md,specs/**,tasks.md,worklog.md}`

- **Reusable knowledge / guidelines (especially Cesium/WebGIS specific)**  
  → `skills/cesium-webgis/resources/*.md` or other skills’ resources

- **Chronological development history / progress over days**  
  → `devlog-YYYY-MM-DD.md`

- **Implementation details that belong in the code or docs**  
  → appropriate `src/**` comments or `docs/**` pages, referenced from specs if needed.

### 0.3 Migration rules

When migrating:

1. Do **NOT** blindly copy entire legacy documents into new files.
   - Extract and rephrase only high-signal content:
     - constraints
     - invariants
     - stable designs
     - accepted workflows
     - confirmed conventions
   - Drop noisy, redundant, or obviously outdated parts, or mark them as deprecated.

2. **Rewrite into structured forms**
   - For project-wide content: update `openspec/project.md` and/or dedicated docs in `docs/` with clear sections:
     - Git workflow
     - coding style
     - API/data contracts
     - testing strategy
     - security/logging
     - Cesium/WebGIS guidelines
   - For change-specific content: create or refine:
     - `proposal.md` — problem, motivation, solution outline
     - `specs/**` — behavior and constraints
     - `tasks.md` — small, atomic tasks
     - `worklog.md` — current state and decisions

3. **Respect existing conventions**
   - If you find conventions already defined (for Git, coding, APIs, etc.):
     - Treat them as authoritative unless the user explicitly approves changes.
   - If you believe a change is necessary:
     - Explain to the user (in Chinese) what you found and why you suggest an update.
     - Propose the exact changes (in English) and **apply them only after the user agrees**.

4. **Mark legacy docs as non-authoritative**
   - After migrating important content, make a note (either in a central doc or within legacy files) that:
     - `openspec/`, `docs/`, `skills/`, worklogs, and devlogs are the authoritative sources.
     - Legacy docs are considered historical references.

5. **Do not re-import whole chat logs after migration**
   - If there are `chat-*.txt` exports, only scan them for durable information during migration.
   - Once the information has been properly migrated into structured files, do **not** re-feed entire chat logs into context again.

---

## OpenSpec usage (ongoing workflow)

When working on any non-trivial feature, refactor, or bugfix:

1. **Discover specs**
   - Read:
     - `openspec/project.md` (overall project context and project-level conventions)
     - relevant files under `openspec/specs/**`
   - For a specific change, read:
     - `openspec/changes/<change-id>/proposal.md`
     - `openspec/changes/<change-id>/tasks.md`
     - `openspec/changes/<change-id>/specs/**`
     - `openspec/changes/<change-id>/worklog.md`

2. **Creating new changes**
   - If the user describes a new feature or substantial change and no suitable `openspec/changes` entry exists, propose using:
     - `/openspec:proposal <short-title>`
   - Help refine:
     - `proposal.md` – problem, motivation, solution outline
     - `tasks.md` – small, atomic tasks
     - `specs/**` – precise constraints and acceptance criteria

3. **Tasks granularity**
   - In `tasks.md`, prefer **small, leaf tasks** that can be completed in one short working session (roughly 1–2 tool-using turns), for example:
     - Implement UI component X skeleton
     - Wire UI component X to API Y
     - Add unit tests for helper function Z
     - Update documentation page W
   - Do **not** silently merge multiple leaf tasks into one huge operation.

4. **Applying changes**
   - When asked to work on a change, **explicitly choose one leaf task** from that change’s `tasks.md`.
   - Announce which task you are working on (in Chinese) and focus solely on that task until it is either:
     - Completed and checked off, or
     - Blocked and recorded as such.

5. **Archiving**
   - When all tasks for a change are completed and tested, suggest:
     - `/openspec:archive <change-id>`  
       to merge specs into the main `openspec/specs/**`.

---

## Worklog & devlog as memory (instead of chat)

### Per-change `worklog.md`

Each change directory under `openspec/changes/<change-id>/` must contain a `worklog.md` file:

Example structure:

```markdown
# Worklog for change: <change-id>

## Current Goal
<Short sentence about what we are doing right now.>

## Key Decisions
- ...

## Files Touched
- path/to/file1
- path/to/file2

## Progress
- [x] ...
- [ ] ...

## Open Questions
- ...
````

Whenever a working session has made meaningful progress or is about to end, you MUST:

1. Read the current `worklog.md`.
2. Update:

   * **Current Goal** – what we are currently trying to achieve for this change.
   * **Key Decisions** – important design and architectural decisions that should survive across sessions.
   * **Files Touched** – files you modified or inspected in a meaningful way.
   * **Progress** – checked/unchecked items corresponding to `tasks.md` progress.
   * **Open Questions** – unresolved issues or things that need user clarification.
3. Save `worklog.md` with these updates.
4. Inform the user (in Chinese) that the checkpoint is complete.

### Project-level `devlog-YYYY-MM-DD.md` (optional but recommended)

* For each working day, if a `devlog-YYYY-MM-DD.md` file exists (or you can create one), you may:

  * Append a short section summarizing:

    * Which changes and tasks were worked on.
    * Significant issues discovered.
    * Next-step suggestions.

* Use this devlog as a chronological journal to help the user see cross-change progress without relying on chat history.

---

## Git usage and conventions

Some Git conventions may already exist in `openspec/project.md` or `docs/git-conventions.md`.
You MUST always:

1. Check existing Git-related docs first.
2. Follow them exactly if they are present.
3. If you think improvements are needed, explain and propose changes to the user before editing any Git convention docs.

If no Git conventions are defined yet and the user approves creating them, follow guidelines like:

* Branch naming:

  * `feature/<short-kebab-title>` for new features
  * `fix/<short-kebab-title>` for bug fixes
  * `chore/<short-kebab-title>` for maintenance or tooling
* Commit messages (Conventional-like):

  * `feat: add XYZ panel for Cesium layer filtering`
  * `fix: handle empty tileset in viewport calculations`
  * `chore: update Cesium dependencies and lint rules`
  * Short, present tense, meaningful English.
* Commit scope:

  * Prefer small, focused commits.
  * Where possible, align commits with OpenSpec leaf tasks and reference them in commit messages or PR descriptions.

When suggesting branch names, commits, or PR descriptions, always follow the current project Git conventions as found in the docs.

---

## Conversation lifecycle, tasks, and checkpoints

Because context is limited, follow this lifecycle:

1. **Before starting a new leaf task**

   * Estimate whether the current conversation has become long (many dialogue turns, several large tool outputs).
   * If the conversation is already long, do **not** blindly start a new task.
   * Instead:

     1. Perform a **checkpoint**:

        * Update the relevant `openspec/changes/<change-id>/worklog.md`.
        * Ensure `tasks.md` is up to date (checked/blocked).
     2. Then ask the user (in Chinese) whether they want to:

        * Continue in this conversation, OR
        * Start a **fresh conversation** that reconstructs state from files.

2. **Starting a task in a fresh conversation**

   * Read:

     * `openspec/project.md`
     * relevant `openspec/specs/**`
     * for the chosen change:

       * `proposal.md`
       * `tasks.md`
       * `specs/**`
       * `worklog.md`
   * Summarize in Chinese:

     * The change’s current goal.
     * What has been done.
     * What leaf task you propose to work on next.
   * If any convention or spec seems missing/unclear, explain and propose how to update docs **before** changing them.

3. **During a task**

   * Keep the focus narrow: only implement what is required for the current leaf task.
   * Use MCP tools, file editing, and code execution as needed.
   * Do not try to “finish the whole feature” if it spans multiple tasks.

4. **Ending a task / nearing context limits**

   * When the conversation is getting long, or after completing a leaf task, you MUST:

     * Update `worklog.md` as described above.
     * Update `tasks.md`.
     * Optionally append to `devlog-YYYY-MM-DD.md`.
   * Then clearly tell the user (in Chinese):

     * What was accomplished.
     * Which files were modified.
     * Suggested next leaf task(s).
     * Whether you recommend starting a fresh conversation next time.

---

## Use of MCP tools and Skills

1. **MCP tools**

   * Use MCP servers (GitHub, DB, logs, filesystem, etc.) to fetch data you need for specs or implementation, instead of asking the user to paste large text.
   * When fetching large data:

     * Avoid dumping raw results into chat.
     * Extract only relevant parts, summarize them, and store any durable insights in specs, worklogs, devlogs, or docs.

2. **Cesium WebGIS skill**

   * If a `skills/cesium-webgis/` directory exists with `SKILL.md` and `resources/*.md`, treat it as the authoritative knowledge base for Cesium-related concepts:

     * Basics of Cesium usage
     * Tiling strategy
     * Coordinate systems
     * Time-dynamic data
     * Performance patterns, etc.
   * Always read existing Cesium-related docs before proposing new Cesium conventions.
   * If new Cesium-specific conventions are needed, explain them to the user and only add/update `skills/cesium-webgis` after user confirmation.

---

## What NOT to do

* Do **not** rely on replaying or re-importing raw previous chat logs (`chat-x.txt`) as the primary way to restore context.
* Do **not** keep legacy process documents as parallel sources of truth after their content has been migrated.
* Do **not** silently invent or overwrite conventions (Git, coding, API, testing, security, Cesium, etc.) without:

  * Checking existing docs, and
  * Informing the user and getting confirmation.
* Do **not** keep huge tool outputs or entire logs in the conversation if they can be summarized and stored in files.
* Do **not** deviate from the rule:

  * **Chinese for dialogue**, **English for code/specs/docs/comments**.

---

## Default behavior summary

Whenever the user asks you to do work on this project:

1. If there are still legacy documents or chat logs not yet migrated:

   * Identify them.
   * Migrate durable content into `openspec/`, `docs/`, `skills/`, worklogs, and devlogs.
   * Mark legacy sources as non-authoritative.

2. Then, for actual implementation:

   * Identify the relevant `openspec/changes/<change-id>`.
   * Read `project.md`, relevant `specs/**`, and that change’s `proposal.md`, `tasks.md`, `specs/**`, and `worklog.md`.
   * Respect existing conventions found in `openspec/` and `docs/`.
   * If conventions need updates, explain and get user approval before editing docs.
   * Propose **one specific leaf task** (in Chinese), implement it, update worklog/tasks/devlog, and manage context via checkpoints and fresh conversations when needed.

```

---
