# 3_design_system.md - UI 设计规范与视觉系统

## 1. 核心设计理念 (Design Philosophy)
本项目采用 **"HUD 沉浸式驾驶舱 (Immersive HUD Cockpit)"** 风格。
*   **关键词**：深空 (Deep Space)、玻璃拟态 (Glassmorphism)、赛博霓虹 (Cyber Neon)、精细数据 (Precision Data)。
*   **原则**：
    *   **背景通透**：UI 面板必须半透明，保证用户始终感知到背后的 3D 场景。
    *   **光影引导**：利用霓虹光晕（Glow）引导视觉焦点（如选中状态、关键数值）。
    *   **动效物理感**：所有面板进出必须带有阻尼感（Spring-like physics）。

---

## 2. 设计令牌 (Design Tokens)

请在 `src/assets/styles/_variables.scss` 中严格定义以下变量。

### 2.1 色彩系统 (Color Palette)

| 变量名           | HEX/RGBA 值                | 语义说明                           |
| :--------------- | :------------------------- | :--------------------------------- |
| **背景色**       |                            |                                    |
| `$bg-deep`       | `#020617`                  | 全局深空底色 (用于 Loading 或兜底) |
| `$glass-base`    | `rgba(15, 23, 42, 0.85)`   | **核心面板背景** (高斯模糊基底)    |
| `$glass-hover`   | `rgba(34, 211, 238, 0.1)`  | 列表项 Hover / 激活背景            |
| **边框色**       |                            |                                    |
| `$border-glass`  | `rgba(56, 189, 248, 0.3)`  | 玻璃面板边框                       |
| `$border-subtle` | `rgba(255, 255, 255, 0.1)` | 内部署分割线                       |
| **主题色**       |                            |                                    |
| `$neon-cyan`     | `#22d3ee`                  | **主色** (激活、滑块、关键数据)    |
| `$neon-blue`     | `#3b82f6`                  | 辅色 (图表填充、一般高亮)          |
| **状态色**       |                            |                                    |
| `$alert-red`     | `#ef4444`                  | 告警、洪峰过境、删除               |
| `$warn-yellow`   | `#eab308`                  | 预警、关注                         |
| `$success-green` | `#22c55e`                  | 正常、在线                         |
| **文本色**       |                            |                                    |
| `$text-main`     | `#f8fafc`                  | 主标题、正文                       |
| `$text-sub`      | `#94a3b8`                  | 标签、辅助说明                     |

### 2.2 字体排印 (Typography)

*   **UI 字体** (`$font-ui`): `'Noto Sans SC', sans-serif` —— 用于标题、按钮、文本。
*   **数据字体** (`$font-code`): `'JetBrains Mono', monospace` —— **强制用于**所有数值、时间、日志、代码。

### 2.3 动效参数 (Animation)

*   `$ease-out`: `cubic-bezier(0.16, 1, 0.3, 1)` —— **核心动效曲线**（快速启动，缓慢停止）。
*   `$transition-base`: `0.3s $ease-out`。

---

## 3. 核心混合宏 (Mixins)

请在 `src/assets/styles/_mixins.scss` 中定义，并在组件 `<style>` 中引用。

### 3.1 玻璃面板标准 (Glass Panel)
所有业务容器（Sidebar, Modal, Floating Panel）必须引用此 Mixin。
```scss
@mixin glass-panel {
  background: $glass-base;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid $border-glass;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  color: $text-main;
}
```

### 3.2 霓虹光晕 (Neon Glow)
用于文本高亮或激活状态的图标。
```scss
@mixin text-glow($color: $neon-cyan) {
  color: $color;
  text-shadow: 0 0 8px rgba($color, 0.4);
}

@mixin box-glow($color: $neon-cyan) {
  box-shadow: 0 0 10px rgba($color, 0.5);
}
```

### 3.3 滚动条美化 (Custom Scrollbar)
全局应用或针对特定容器应用。
```scss
@mixin custom-scrollbar {
  &::-webkit-scrollbar { width: 4px; height: 4px; }
  &::-webkit-scrollbar-thumb {
    background: rgba($neon-cyan, 0.3);
    border-radius: 2px;
    &:hover { background: $neon-cyan; }
  }
}
```

---

## 4. 布局层级规范 (Z-Index Strategy)

由于采用了顶部工具栏挂载面板的设计，Z-Index 管理至关重要。

请在 `_variables.scss` 中定义 map 或变量：

| 层级        | Z-Index | 内容组件              | 说明                               |
| :---------- | :------ | :-------------------- | :--------------------------------- |
| **Layer 0** | `0`     | `CesiumViewer`        | 3D 底座                            |
| **Layer 1** | `1`     | `MeteoSplitLayer`     | 气象卷帘遮罩                       |
| **Layer 2** | `10`    | `RouterView` (Layout) | 承载左右侧边栏                     |
| **Layer 3** | `40`    | `SplitSlider`         | 气象卷帘拖拽手柄                   |
| **Layer 4** | `50`    | `TopRibbon`           | 顶部导航栏 (需盖住侧边栏)          |
| **Layer 5** | `60`    | `FloodPanel`          | **淹没分析面板** (必须高于 Header) |
| **Layer 6** | `100`   | `BottomDock`          | 底部 Dock 菜单 (最高优先级)        |

---

## 5. 组件样式规范

### 5.1 顶部工具按钮 (Top Toolbar Buttons)
*   **默认状态**: 透明背景，文字颜色 `$text-sub`。
*   **Hover**: 背景 `rgba($neon-cyan, 0.1)`，文字白色。
*   **Active**: 背景 `$neon-cyan`，文字黑色，`box-shadow` 发光。

### 5.2 输入控件 (Inputs & Range)
*   **背景**: `rgba(0, 0, 0, 0.3)` (比面板更深)。
*   **边框**: `1px solid #333`。
*   **Range Slider**: `accent-color: $neon-cyan`。

---

## 6. 交互动效规范 (Vue Transitions)

请在 `main.scss` 或具体组件中定义以下 Vue Transition 类：

### 6.1 面板滑入滑出 (Sidebar)
*   **Sidebar Left**: `transform: translateX(-40px)` -> `0`。
*   **Sidebar Right**: `transform: translateX(40px)` -> `0`。
*   **Timing**: `0.3s $ease-out`。

### 6.2 顶部挂载面板 (Drop Down)
用于淹没分析面板。
*   **Enter**: `opacity: 0`, `transform: translateY(-10px)`.
*   **Leave**: 同上。

### 6.3 专注模式切换 (Blur Transition)
当 `viewMode` 切换时，Cesium 容器的模糊过渡：
```scss
.cesium-container {
  transition: filter 0.5s ease, transform 0.5s ease;
  &.is-blurred {
    filter: blur(12px) brightness(0.4);
    transform: scale(1.02); // 微放大防止边缘白边
  }
}
```