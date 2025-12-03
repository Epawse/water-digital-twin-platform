# Tasks: 修复气象页面 MeteoSplitLayer 组件

## Phase 1: 兼容性修复
- [x] **T1.1** 为 SingleTileImageryProvider 添加 tileWidth 和 tileHeight 参数
- [x] **T1.2** 将 ImagerySplitDirection 改用 SplitDirection 枚举
- [x] **T1.3** 使用数值常量代替枚举 (LEFT = -1.0, RIGHT = 1.0)

## Phase 2: 功能验证
- [x] **T2.1** 验证雷达回波图层正常显示
- [x] **T2.2** 验证降雨图层正常显示
- [x] **T2.3** 验证分屏滑块功能正常
- [x] **T2.4** 验证图例显示正确

## 完成状态
所有任务已完成 ✅

## 备注
- 天地图 API 429 限流错误为正常现象，与本次修复无关
- 雷达回波使用红黄色系，降雨使用蓝色系
