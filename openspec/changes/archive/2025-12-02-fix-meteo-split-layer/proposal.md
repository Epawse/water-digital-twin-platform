# Change: 修复气象页面 MeteoSplitLayer 组件

## Why
升级到 Cesium 1.136 后，MeteoSplitLayer.vue 组件出现兼容性问题：
- SingleTileImageryProvider 缺少必需的 tileWidth 和 tileHeight 参数
- ImagerySplitDirection 枚举在 1.136 中改为 SplitDirection

## What Changes
- 修复 SingleTileImageryProvider 配置，添加 tileWidth 和 tileHeight 参数
- 将 ImagerySplitDirection 改用 SplitDirection 枚举或数值常量
- 修复雷达回波和降雨图层的分屏显示功能

## Impact
- Affected specs: meteorology
- Affected code:
  - `src/components/business/MeteoSplitLayer.vue`
