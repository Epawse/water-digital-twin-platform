# Change: Implement Device Manager

## Why
The "Device Manager" module provides IoT operations capabilities. It also uses "Focus Mode". It features a split-pane layout within the modal: Device Topology (Left) and Protocol Log Terminal (Right).

## What Changes
- Implement `DeviceManager.vue` using `ModalBox.vue`.
- Create `DeviceTopology.vue`: A list/tree of IoT devices (RTUs).
- Create `TerminalLog.vue`: A "Matrix-style" scrolling log terminal showing hex packets.
- Create `device.ts` store to manage the selected device and simulate incoming logs.

## Impact
- Affected specs: `device-manager`
- Affected code: `src/views/DeviceManager.vue`, `src/stores/device.ts`, `src/components/business/`
