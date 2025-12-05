# 2_architecture.md - 技术架构与开发规范

## 1. 技术栈选型 (Tech Stack)

*   **构建工具**: `Vite 5.x` (配置 `@` 路径别名，开启 SCSS 预处理)
*   **核心框架**: `Vue 3.4+` (Composition API + `<script setup>`)
*   **语言**: `TypeScript 5.x` (严格模式 `strict: true`)
*   **状态管理**: `Pinia` (使用 Setup Store 语法，管理 GIS 状态与业务数据)
*   **路由管理**: `Vue Router 4` (采用覆盖式路由策略)
*   **样式预处理**: `SCSS` (全局注入变量与 Mixins，不使用 Tailwind 以保持复杂的玻璃拟态效果可控)
*   **3D 引擎**: `CesiumJS 1.1xx` (官方 npm 包)
*   **图表库**: `ECharts 5.x` (按需引入)
*   **工具库**: `@vueuse/core` (响应式工具), `lodash-es` (工具函数)

---

## 2. 项目目录结构 (Directory Structure)

Agent 必须严格遵守以下目录结构进行文件创建：

```text
src/
├── assets/
│   ├── styles/
│   │   ├── _variables.scss    # 全局设计令牌 (颜色, 字体, 缓动, Z-Index)
│   │   ├── _mixins.scss       # 核心混合宏 (glass-panel, neon-text, scrollbar)
│   │   └── main.scss          # 全局重置与基础样式
│   └── images/                # 静态资源 (Logo, 占位图)
├── components/
│   ├── common/                # 通用 UI 组件 (无具体业务逻辑)
│   │   ├── GlassPanel.vue     # [核心] 玻璃面板容器 (支持 Title, Actions slot)
│   │   ├── TechButton.vue     # 霓虹/幽灵按钮
│   │   └── ModalBox.vue       # 专注模式下的居中弹窗容器
│   ├── business/              # 业务复用组件
│   │   ├── KpiBoard.vue       # 首页-运行概览
│   │   ├── WeatherStrip.vue   # 首页-未来趋势
│   │   ├── CctvPlayer.vue     # 首页-视频监控框
│   │   └── TerminalLog.vue    # 设备页-协议日志终端
│   └── cesium/                # GIS 相关组件
│       ├── CesiumViewer.vue   # 3D 地图底座 (单例)
│       └── GisToolbox.vue     # 顶部工具栏对应的分析工具逻辑 (测距/剖面)
├── composables/               # 组合式函数 (Logic Reuse)
│   ├── useCesium.ts           # 暴露 viewer 实例，控制 2D/3D 切换，管理底图图层
│   ├── useWeatherLayer.ts     # 控制气象模式下的卷帘与雷达图层
│   └── useSimulation.ts       # 仿真计算逻辑封装
├── layout/
│   ├── TopRibbon.vue          # [核心] 顶部倒品字形导航栏 (含工具平铺)
│   ├── BottomDock.vue         # 底部常驻导航 Dock
│   └── MainLayout.vue         # 布局编排器 (处理 UI 显隐 transition)
├── stores/                    # Pinia 状态管理
│   ├── app.ts                 # 全局 UI 状态 (currentModule, isUiHidden, viewMode)
│   ├── simulation.ts          # 仿真参数 (engine, flow, waterHeight)
│   └── device.ts              # IoT 设备列表与实时日志流
├── types/                     # TypeScript 类型定义
│   ├── business.d.ts          # 业务实体 (KPI, Weather, Device)
│   └── shims-cesium.d.ts      # Cesium 类型补丁
├── views/                     # 页面级组件 (对应路由)
│   ├── Dashboard.vue          # 全域态势
│   ├── Simulation.vue         # 仿真推演 (沉浸作业)
│   ├── Meteorology.vue        # 气象分析 (全屏作业)
│   ├── DataGovernance.vue     # 数据治理 (专注管理)
│   ├── DeviceManager.vue      # 设备运维 (专注管理)
│   └── AiEngineering.vue      # AI 工程 (专注管理)
├── App.vue                    # 根组件 (承载 Cesium 背景 + RouterView)
└── main.ts                    # 入口文件
```

---

## 3. 核心架构策略

### 3.1 渲染分层策略 (Layering Strategy)
项目采用 **"持久化底座 + 覆盖式 UI"** 架构，严禁在路由切换时销毁 Cesium 实例。

*   **Layer 0 (Z=0)**: `CesiumViewer.vue`。挂载于 `App.vue` 根节点，永不销毁。
*   **Layer 1 (Z=1)**: `MeteoSplitLayer`。气象模式下的左侧卷帘遮罩层。
*   **Layer 2 (Z=10)**: `RouterView` (UI Layer)。承载所有业务页面。
*   **Layer 3 (Z=50)**: `TopRibbon.vue`。顶部导航栏。
*   **Layer 4 (Z=60)**: `FloodPanel`。挂载于顶部的悬浮面板。
*   **Layer 5 (Z=100)**: `BottomDock.vue`。底部导航。

### 3.2 状态管理规范 (Pinia)

**`stores/app.ts` (核心状态机)**
```typescript
export const useAppStore = defineStore('app', () => {
  const currentModule = ref('dashboard');
  const isUiHidden = ref(false); // 控制全局面板显隐 (纯净模式)
  
  // 视图模式计算属性
  const viewMode = computed(() => {
    if (['dashboard', 'simulation', 'meteo'].includes(currentModule.value)) {
      return 'workstation'; // 沉浸作业模式 (地图清晰)
    }
    return 'focus'; // 专注管理模式 (地图模糊)
  });

  return { currentModule, isUiHidden, viewMode };
});
```

**`stores/cesium.ts` (性能关键)**
*   **必须使用 `shallowRef`** 存储 Cesium Viewer 实例，防止 Vue 的深度响应式代理导致严重的性能下降（FPS 骤降）。
*   提供 `toggle2D3D()` 和 `setBlur(boolean)` 方法统一管理底座状态。

### 3.3 Cesium 集成规范
*   **全屏卷帘实现**：气象页面不使用 HTML `div` 遮挡，而是调用 Cesium 的 `viewer.scene.splitPosition` 和 `ImageryLayer.splitDirection` 实现原生的高性能卷帘。
*   **淹没分析实现**：前端演示使用 `Cesium.CallbackProperty` 动态修改 Polygon 的 `extrudedHeight`，确保拖动滑块时无卡顿。

---

## 4. UI 开发规范

### 4.1 GlassPanel 组件接口
所有业务面板（KPI、图层控制、参数表单）必须使用此组件。

```typescript
// components/common/GlassPanel.vue
interface Props {
  // 面板标题 (可选)
  title?: string;
  // 标题左侧图标 class (如 "fa-solid fa-server")
  icon?: string;
  // 右上角操作按钮组 (如 ['import', 'export'])
  actions?: string[]; 
  // 是否移除默认内边距 (用于列表容器)
  noPadding?: boolean;
}
// Events: emit('action-click', actionName)
```

### 4.2 顶部 Ribbon 布局
*   **布局**：CSS Grid `1fr auto 1fr`，确保标题绝对居中。
*   **工具栏**：右侧工具栏采用 Flex 布局平铺，按钮组件化 (`TopToolButton.vue`)，包含 `active` 状态和 `tooltip`。

### 4.3 响应式处理
*   **侧边栏**：固定宽度 `340px`，高度 `calc(100vh - 80px)`，内部使用 `flex: 1` + `overflow-y: auto`。
*   **字体**：在 `1920x1080` 基准下开发，大屏适配可通过 `postcss-pxtorem` 或 CSS `zoom` 属性处理。

---

## 5. 关键业务逻辑实现指引

### 5.1 资源操作闭环
在 `GlassPanel` 的 header 中统一集成“导入/导出/保存”微型图标。
*   **Mock 逻辑**：点击导出时，暂时 `console.log` 并弹出 Toast 提示“报表已生成”。

### 5.2 视频监控 (HLS/FLV)
*   首页的 `CctvPlayer` 组件预留 `video.js` 或 `flv.js` 接口。
*   **原型阶段**：使用静态图片 + 噪点遮罩模拟真实感，点击播放按钮弹出全屏模态框。

### 5.3 气象反演交互
*   进入 `Meteorology` 路由时，触发 `useCesium().setMode2D()`。
*   离开该路由时，触发 `useCesium().setMode3D()`。
*   **卷帘逻辑**：绑定鼠标 `mousemove` 事件更新 `splitPosition` 状态。

---

## 6. 指令给 Agent

1.  **Strict Mode**: 严禁在 `views` 文件夹外编写页面逻辑。严禁在 CSS 中硬编码颜色值，必须使用 `_variables.scss`。
2.  **Step-by-Step**:
    *   先搭建基础 Layout (Ribbon + Dock + RouterView)。
    *   再实现 Cesium 底座与 Pinia 的状态联动 (2D/3D, Blur)。
    *   最后逐个实现 6 个业务页面的 UI 细节。
3.  **Refactoring**: 将 HTML 预览中的巨型 CSS 拆解为组件级 `<style scoped>`。