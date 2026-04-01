// Stub types for @ant/computer-use-mcp/types

export type CoordinateMode = 'api' | 'display'
export type CuSubGates = Record<string, boolean>
export type CuPermissionRequest = Record<string, unknown>
export type CuPermissionResponse = Record<string, unknown>

export const DEFAULT_GRANT_FLAGS = {
  allowAll: false,
  rememberDecision: false,
}
