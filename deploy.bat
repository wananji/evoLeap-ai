@echo off
chcp 65001 >nul
echo ========================================
echo   GitHub Pages 一键部署脚本 (gh CLI)
echo ========================================
echo.

:: 配置项
set REPO_NAME=evoLeap-ai

echo [1/7] 检查 gh CLI 是否已安装...
gh --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未检测到 gh CLI，请先安装：
    echo   winget install GitHub.cli
    pause
    exit /b 1
)
echo gh CLI 已安装
echo.

echo [2/7] 检查登录状态...
gh auth status >nul 2>&1
if errorlevel 1 (
    echo [提示] 请先登录 GitHub：
    gh auth login
) else (
    echo 已登录
)
echo.

echo [3/7] 创建 GitHub 仓库...
gh repo create %REPO_NAME% --public --description "EvoLeap AI 官方网站" 2>nul
if errorlevel 1 (
    echo 仓库可能已存在，继续...
) else (
    echo 仓库创建成功
)
echo.

echo [4/7] 添加远程仓库...
git remote remove origin 2>nul
git remote add origin https://github.com/$(gh api user -q .login)/%REPO_NAME%.git
echo 远程仓库已配置
echo.

echo [5/7] 初始化 Git 并提交...
if not exist .git (
    git init
    git branch -M main
)
echo 正在添加文件...
git add .
git add -u
git commit -m "feat: 初始化 EvoLeap AI 官网项目" 2>nul
if errorlevel 1 (
    echo 没有新提交或提交失败
) else (
    echo 提交成功
)
echo.

echo [6/7] 安装依赖并构建...
call npm install
if errorlevel 1 (
    echo [错误] npm install 失败
    pause
    exit /b 1
)
call npm run build
if errorlevel 1 (
    echo [错误] 构建失败
    pause
    exit /b 1
)
echo 构建成功
echo.

echo [7/7] 推送到 GitHub...
git push -u origin main --force
if errorlevel 1 (
    echo [错误] 推送失败
    pause
    exit /b 1
)
echo 推送成功
echo.

:: 获取用户名
for /f "tokens=*" %%i in ('gh api user -q .login') do set USERNAME=%%i

echo ========================================
echo   代码推送成功！
echo ========================================
echo.
echo [自动] 正在配置 GitHub Pages...
echo.

:: 使用 gh CLI 启用 Pages
gh api repos/%USERNAME%/%REPO_NAME%/pages ^
  -X POST ^
  -f build_type=workflow >nul 2>&1

if errorlevel 1 (
    echo [提示] 请手动启用 GitHub Pages：
    echo   访问 https://github.com/%USERNAME%/%REPO_NAME%/settings/pages
    echo   选择 Build and deployment ^> GitHub Actions
) else (
    echo GitHub Pages 已启用！
)
echo.

echo ========================================
echo   部署完成！
echo ========================================
echo.
echo 网站将在以下地址可用：
echo https://%USERNAME%.github.io/%REPO_NAME%/
echo.
echo 查看部署进度：
echo https://github.com/%USERNAME%/%REPO_NAME%/actions
echo.
pause
