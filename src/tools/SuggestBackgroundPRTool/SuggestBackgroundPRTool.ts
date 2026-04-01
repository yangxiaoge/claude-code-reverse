// Stub for SuggestBackgroundPRTool (ANT internal tool)
import type { Tool } from '../../Tool.js'
export const SuggestBackgroundPRTool: Tool<unknown, unknown> = {
  name: 'SuggestBackgroundPR',
  async description() { return 'Suggest background PR tool (not available)' },
  inputJSONSchema: { type: 'object' as const, properties: {}, required: [] },
  async prompt() { return '' },
  async checkPermissions() { return { result: 'allow' as const } },
  async call() { throw new Error('SuggestBackgroundPRTool is not available') },
  userFacingName() { return 'SuggestBackgroundPR' },
  isReadOnly() { return true },
  isEnabled() { return false },
  isConcurrencySafe() { return false },
}
