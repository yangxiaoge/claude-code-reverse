# Claude Code (Reverse-Engineered)

Claude Code CLI 的逆向工程版本，基于 Bun 运行时构建。

## 前置要求

- [Bun](https://bun.sh/) >= 1.0
- Node.js >= 18（部分原生依赖需要）

## 安装依赖

```bash
bun install
```

## 启动方式

```bash
# 1. 构建
bun run build

# 2. 运行
bun dist/claude
```

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `ANTHROPIC_API_KEY` | Anthropic API 密钥 | — |
| `DISABLE_TELEMETRY` | 禁用遥测（推荐开启） | — |

## 项目结构

```
src/
  entrypoints/
    cli.tsx          # CLI 入口
build.ts             # 构建脚本
shims/               # Bun/React 兼容 shim
stubs/               # 内部包的 stub 实现
dist/                # 构建产物（git 忽略）
```
