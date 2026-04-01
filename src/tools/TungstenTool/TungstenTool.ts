// Stub for TungstenTool (Anthropic internal tool)
import type { Tool } from '../../Tool.js'
export const TungstenTool: Tool<unknown, unknown> = {
  name: 'Tungsten',
  async description() { return 'Internal tool (not available in this build)' },
  inputJSONSchema: { type: 'object' as const, properties: {}, required: [] },
  async prompt() { return '' },
  async checkPermissions() { return { result: 'allow' as const } },
  async call() { throw new Error('TungstenTool is not available in this build') },
  userFacingName() { return 'Tungsten' },
  isReadOnly() { return true },
  isEnabled() { return false },
  isConcurrencySafe() { return false },
}
