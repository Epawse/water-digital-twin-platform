# Proposal: Add Flood Visualization

## Summary
为仿真页面添加3D水流/淹没可视化效果，在Cesium地图上动态展示洪水演进过程，使用模拟数据驱动动画。

## Motivation
当前仿真页面仅有参数配置和数值结果展示，缺乏直观的3D可视化效果。用户无法在地图上看到洪水演进的空间分布和时序变化，影响决策支持效果。

## Scope
- **IN**:
  - 3D水面效果渲染（Cesium Primitive/Entity）
  - 时间轴驱动的水位变化动画
  - 淹没区域着色显示
  - 模拟数据生成器
- **OUT**:
  - 后端模型计算接口（仅前端模拟）
  - 真实DEM地形数据
  - 粒子流向效果（后续迭代）

## Approach
1. 使用Cesium `WaterPrimitive` 或 `PolygonGraphics` 配合材质实现水面效果
2. 基于时间轴progress值，动态更新水面高度和覆盖范围
3. 预定义若干淹没区域多边形（乌鲁木齐周边河道/水库区域）
4. 颜色渐变表示水深（浅蓝→深蓝）

## Dependencies
- simulation spec (existing)
- TimelineControl component (existing)
- Cesium store (existing)

## Risks
- Cesium水面材质渲染性能问题 → 使用简化几何、LOD控制
- 与主页Cesium实例的交互 → 仿真页使用主Cesium，通过store协调
