# Change: 升级 Cesium 到 1.136 并添加 Globe 滤镜功能

## Why
Cesium 1.82 版本老旧，需要升级到最新稳定版 1.136 以获得更好的性能和新功能。同时需要保留科技风/水墨风 Globe 滤镜效果。

## What Changes
- 升级 Cesium 从 1.82-epawse 到 1.136
- 修改 Controller.ts 以兼容 Cesium 1.136 API 变化
- 添加 Globe 滤镜功能支持（filterEnabled, filterColor, filterExposure, filterContrast）
- 更新 index.html 配置 CESIUM_BASE_URL

## Impact
- Affected specs: platform
- Affected code: 
  - `src/utils/ctrlCesium/Controller.ts`
  - `index.html`
  - `public/Cesium-1.136/` (新增)
