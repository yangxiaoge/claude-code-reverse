// Stub for @ant/computer-use-mcp (Anthropic internal package)
// This package is only used behind the CHICAGO_MCP feature flag,
// which is disabled in external builds.

export const API_RESIZE_PARAMS = { width: 1280, height: 800 }
export const targetImageSize = { width: 1280, height: 800 }

export function buildComputerUseTools(): never {
  throw new Error('@ant/computer-use-mcp is not available in this build')
}

export function bindSessionContext(): never {
  throw new Error('@ant/computer-use-mcp is not available in this build')
}

export type ComputerUseSessionContext = Record<string, unknown>
export type CuCallToolResult = Record<string, unknown>
export type CuPermissionRequest = Record<string, unknown>
export type CuPermissionResponse = Record<string, unknown>
export type ScreenshotDims = { width: number; height: number }
