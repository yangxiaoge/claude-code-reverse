// Stub for SDK tool types
export type SDKToolInput = Record<string, unknown>
export type SDKToolOutput = {
  content: Array<{ type: 'text'; text: string }>
}
export type SDKToolDefinition = {
  name: string
  description?: string
  inputSchema?: Record<string, unknown>
}
