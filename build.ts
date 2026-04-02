/**
 * Build script for Claude Code.
 * Run with: bun build.ts
 * Output: dist/claude (executable)
 */

import { build, type BuildConfig } from 'bun'
import { existsSync, mkdirSync } from 'fs'
import { chmod } from 'fs/promises'
import { fileURLToPath } from 'node:url'

// 【终极修复】强制所有反斜杠变为正斜杠，严防 Bun 崩溃
function toBunWinPath(url: string | URL): string {
  return fileURLToPath(url).replace(/\\/g, '/')
}

const VERSION = process.env.VERSION ?? '6.6.66'
const BUILD_TIME = new Date().toISOString()

const DISABLED_FEATURES: Record<string, boolean> = {
  ABLATION_BASELINE: false,
  AGENT_MEMORY_SNAPSHOT: false,
  AGENT_TRIGGERS: false,
  AGENT_TRIGGERS_REMOTE: false,
  ALLOW_TEST_VERSIONS: false,
  ANTI_DISTILLATION_CC: false,
  AUTO_THEME: true,
  AWAY_SUMMARY: false,
  BASH_CLASSIFIER: false,
  BG_SESSIONS: false,
  BREAK_CACHE_COMMAND: false,
  BRIDGE_MODE: false,
  BUDDY: false,
  BUILDING_CLAUDE_APPS: true,
  BUILTIN_EXPLORE_PLAN_AGENTS: true,
  BYOC_ENVIRONMENT_RUNNER: false,
  CACHED_MICROCOMPACT: false,
  CCR_AUTO_CONNECT: false,
  CCR_MIRROR: false,
  CCR_REMOTE_SETUP: false,
  CHICAGO_MCP: false,
  COMMIT_ATTRIBUTION: false,
  COMPACTION_REMINDERS: true,
  CONNECTOR_TEXT: false,
  CONTEXT_COLLAPSE: true,
  COORDINATOR_MODE: false,
  COWORKER_TYPE_TELEMETRY: false,
  DAEMON: false,
  DIRECT_CONNECT: false,
  DOWNLOAD_USER_SETTINGS: false,
  DUMP_SYSTEM_PROMPT: false,
  ENHANCED_TELEMETRY_BETA: false,
  EXPERIMENTAL_SKILL_SEARCH: false,
  EXTRACT_MEMORIES: true,
  FILE_PERSISTENCE: true,
  FORK_SUBAGENT: false,
  HARD_FAIL: false,
  HISTORY_PICKER: true,
  HISTORY_SNIP: false,
  HOOK_PROMPTS: false,
  IS_LIBC_GLIBC: false,
  IS_LIBC_MUSL: false,
  KAIROS: false,
  KAIROS_BRIEF: false,
  KAIROS_CHANNELS: false,
  KAIROS_DREAM: false,
  KAIROS_GITHUB_WEBHOOKS: false,
  KAIROS_PUSH_NOTIFICATION: false,
  LODESTONE: false,
  MCP_RICH_OUTPUT: true,
  MCP_SKILLS: false,
  MEMORY_SHAPE_TELEMETRY: false,
  MESSAGE_ACTIONS: false,
  MONITOR_TOOL: false,
  NATIVE_CLIENT_ATTESTATION: false,
  NATIVE_CLIPBOARD_IMAGE: false,
  NEW_INIT: true,
  OVERFLOW_TEST_TOOL: false,
  PERFETTO_TRACING: false,
  POWERSHELL_AUTO_MODE: false,
  PROMPT_CACHE_BREAK_DETECTION: false,
  QUICK_SEARCH: true,
  REACTIVE_COMPACT: false,
  REVIEW_ARTIFACT: false,
  RUN_SKILL_GENERATOR: false,
  SELF_HOSTED_RUNNER: false,
  SHOT_STATS: false,
  SKILL_IMPROVEMENT: false,
  SLOW_OPERATION_LOGGING: false,
  SSH_REMOTE: false,
  STREAMLINED_OUTPUT: false,
  TEAMMEM: false,
  TEMPLATES: true,
  TERMINAL_PANEL: false,
  TOKEN_BUDGET: true,
  TORCH: false,
  TRANSCRIPT_CLASSIFIER: false,
  TREE_SITTER_BASH: false,
  TREE_SITTER_BASH_SHADOW: false,
  UDS_INBOX: false,
  ULTRAPLAN: false,
  ULTRATHINK: false,
  UNATTENDED_RETRY: false,
  UPLOAD_USER_SETTINGS: false,
  VERIFICATION_AGENT: false,
  VOICE_MODE: false,
  WEB_BROWSER_TOOL: false,
  WORKFLOW_SCRIPTS: false,
}

const define: Record<string, string> = {
  'MACRO.VERSION': JSON.stringify(VERSION),
  'MACRO.BUILD_TIME': JSON.stringify(BUILD_TIME),
  'MACRO.FEEDBACK_CHANNEL': JSON.stringify('https://github.com/anthropics/claude-code/issues'),
  'MACRO.ISSUES_EXPLAINER': JSON.stringify('https://github.com/anthropics/claude-code/issues'),
  'MACRO.NATIVE_PACKAGE_URL': JSON.stringify('https://registry.npmjs.org/@anthropic-ai/claude-code'),
  'MACRO.PACKAGE_URL': JSON.stringify('https://registry.npmjs.org/@anthropic-ai/claude-code'),
  'MACRO.VERSION_CHANGELOG': JSON.stringify(''),
  'process.env.NODE_ENV': JSON.stringify('production'),
}

if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true })
}

console.log(`Building Claude Code v${VERSION}...`)

const config: BuildConfig = {
  entrypoints: ['./src/entrypoints/cli.tsx'],
  outdir: './dist',
  naming: 'claude',
  target: 'bun',
  format: 'esm',
  minify: false,
  sourcemap: 'external',
  define,
  external:[],
  plugins:[
    {
      name: 'shim-resolver',
      setup(build) {
        build.onResolve({ filter: /^color-diff-napi$/ }, () => ({
          path: toBunWinPath(new URL('./src/native-ts/color-diff/index.ts', import.meta.url)),
        }))
        
        build.onResolve({ filter: /^bun:bundle$/ }, () => ({
          path: toBunWinPath(new URL('./shims/bun-bundle.ts', import.meta.url)),
        }))
        
        build.onResolve({ filter: /^react\/compiler-runtime$/ }, (args) => ({
          path: toBunWinPath(import.meta.resolve('react-compiler-runtime')),
        }))
        
        const reactShimPath = toBunWinPath(new URL('./shims/react-use-polyfill.ts', import.meta.url))
        
        // 【核心修复】提前算出 node_modules 里面真实的 react 路径，并强制变为正斜杠
        const realReactPath = toBunWinPath(import.meta.resolve('react'))
        
        build.onResolve({ filter: /^react$/ }, (args) => {
          const importerPath = args.importer ? args.importer.replace(/\\/g, '/') : ''
          
          if (importerPath === reactShimPath) {
            // 不要 return undefined 让 Bun 自己解析了！直接把修正好的路径塞给它！
            return { path: realReactPath }
          }
          return { path: reactShimPath }
        })
      },
    },
  ],
}

const result = await build(config)

if (result.success) {
  const outFile = 'dist/claude'
  await chmod(outFile, 0o755)
  console.log(`\nBuild successful!`)
  console.log(`Output: ${outFile}`)
  console.log(`\nRun with:`)
  console.log(`  ./dist/claude`)
  console.log(`  # or`)
  console.log(`  bun dist/claude`)
} else {
  console.error('Build failed:')
  for (const log of result.logs) {
    console.error(log)
  }
  process.exit(1)
}
