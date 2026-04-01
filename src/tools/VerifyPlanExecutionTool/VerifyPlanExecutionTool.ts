// Stub for VerifyPlanExecutionTool (VERIFICATION_AGENT feature - disabled)
import type { Tool } from '../../Tool.js'
export const VerifyPlanExecutionTool: Tool<unknown, unknown> = {
  name: 'VerifyPlanExecution',
  async description() { return 'Verify plan execution tool (not available)' },
  inputJSONSchema: { type: 'object' as const, properties: {}, required: [] },
  async prompt() { return '' },
  async checkPermissions() { return { result: 'allow' as const } },
  async call() { throw new Error('VerifyPlanExecutionTool is not available') },
  userFacingName() { return 'VerifyPlanExecution' },
  isReadOnly() { return true },
  isEnabled() { return false },
  isConcurrencySafe() { return false },
}
