#!/bin/bash
# 快速启动脚本 - 同时启动前后端

echo "🚀 启动水利数字孪生平台..."

# 检查依赖
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装"
    exit 1
fi

if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 未安装"
    exit 1
fi

# 启动前端
echo ""
echo "📦 启动前端开发服务器..."
npm run dev &
FRONTEND_PID=$!

# 启动后端
echo ""
echo "🐍 启动后端服务..."
cd backend

if [ ! -d "venv" ]; then
    echo "创建虚拟环境..."
    python3 -m venv venv
fi

source venv/bin/activate 2>/dev/null || source venv/Scripts/activate 2>/dev/null

uvicorn app.main:app --reload --port 8000 &
BACKEND_PID=$!

cd ..

echo ""
echo "✅ 服务启动完成！"
echo ""
echo "前端: http://localhost:5174"
echo "后端: http://localhost:8000"
echo "API 文档: http://localhost:8000/docs"
echo ""
echo "按 Ctrl+C 停止所有服务"
echo ""

# 等待中断信号
trap "kill $FRONTEND_PID $BACKEND_PID" EXIT
wait
