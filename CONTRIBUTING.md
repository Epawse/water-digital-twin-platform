# 欢迎贡献！👋

感谢对水利数字孪生平台的兴趣。本文档指导你如何开始开发。

## 快速入门

### 第一步：克隆仓库
```bash
git clone https://github.com/Epawse/water-digital-twin-platform.git
cd water-digital-twin-platform
```

### 第二步：配置环境
详细步骤请参考 **[DEVELOPMENT.md](DEVELOPMENT.md)** 文档，包括：
- Node.js 和 Python 环境
- 天地图 API Key 申请
- PostgreSQL 数据库配置
- 常见问题排查

### 第三步：启动开发

**前端** (新终端):
```bash
npm install
npm run dev
```

**后端** (新终端):
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
# 配置 .env 文件后...
alembic upgrade head
uvicorn app.main:app --reload
```

访问 `http://localhost:5174` 开始开发！

## 项目结构

```
├── src/                    # 前端源码 (Vue3 + TypeScript)
├── backend/                # 后端源码 (FastAPI + PostgreSQL)
├── DEVELOPMENT.md          # 详细开发指南 📖
└── README.md               # 项目说明
```

## 代码贡献指南

### 分支管理
- `main`: 生产分支，稳定版本
- 新功能：从 `main` 创建 feature 分支
  ```bash
  git checkout -b feature/功能名称
  ```

### 提交规范

使用清晰的提交信息：
```
feat: 新增功能描述
fix: 修复 BUG 描述
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
perf: 性能优化
test: 添加测试
```

例：
```bash
git commit -m "feat: 添加洪水可视化模块"
git commit -m "fix: 修复地图滤镜在 Cesium 1.136 中的兼容性"
```

### 代码风格

**前端**:
- TypeScript + Vue 3 Composition API
- Prettier 格式化（自动）
- ESLint 检查

**后端**:
- Python 3.10+
- FastAPI 异步风格
- SQLAlchemy ORM

## 常见开发任务

### 添加新的 API 端点

1. 创建模型 (`backend/app/models/`)
2. 创建数据模式 (`backend/app/schemas/`)
3. 创建路由处理器 (`backend/app/api/`)
4. 在 `router.py` 中注册路由

### 添加新的前端页面

1. 创建视图组件 (`src/views/`)
2. 添加路由配置 (`src/router/index.ts`)
3. 在菜单中注册 (TopRibbon.vue)

### 修改数据库结构

```bash
cd backend

# 创建新的迁移
alembic revision --autogenerate -m "描述修改"

# 应用迁移
alembic upgrade head
```

## 调试和日志

### 前端调试
- VS Code 调试器配置在 `.vscode/` 中
- 浏览器开发者工具（F12）
- Vue DevTools 扩展

### 后端调试
```bash
# 启用调试模式
DEBUG=true uvicorn app.main:app --reload

# 查看日志
tail -f backend/app.log
```

## 性能优化建议

### 前端
- 使用 Vite 预构建优化
- 代码分割和懒加载
- Cesium 动态加载资源

### 后端
- 数据库查询优化（索引、连接池）
- 异步任务处理
- 缓存策略

## 报告问题

发现 BUG 或有改进建议？
- 创建 GitHub Issue
- 详细描述问题和复现步骤
- 提供环境信息（OS、Node版本、Python版本等）

## 获取帮助

- 📖 查看 [DEVELOPMENT.md](DEVELOPMENT.md) 获取详细指南
- 💬 在 GitHub Discussions 中提问
- 🐛 搜索已有的 Issues

## 许可证

本项目采用 MIT License，详见 LICENSE 文件。

---

感谢你的贡献！ ❤️
