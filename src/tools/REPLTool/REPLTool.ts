// Stub for REPLTool (ANT internal tool - only loaded when USER_TYPE=ant)
import type { Tool } from '../../Tool.js'
export const REPLTool: Tool<unknown, unknown> = {
  name: 'REPL',
  async description() { return 'REPL tool (not available in this build)' },
  inputJSONSchema: { type: 'object' as const, properties: {}, required: [] },
  async prompt() { return '' },
  async checkPermissions() { return { result: 'allow' as const } },
  async call() { throw new Error('REPLTool is not available in this build') },
  userFacingName() { return 'REPL' },
  isReadOnly() { return false },
  isEnabled() { return false },
  isConcurrencySafe() { return false },
}
