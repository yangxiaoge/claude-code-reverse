// Stub for @anthropic-ai/mcpb (Anthropic internal MCP bundle format)

export type McpbUserConfigurationOption = {
  type: 'string' | 'number' | 'boolean'
  description?: string
  default?: string | number | boolean
  required?: boolean
}

export type McpbManifest = {
  name: string
  version: string
  description?: string
  tools?: Array<{ name: string; description?: string }>
  userConfiguration?: Record<string, McpbUserConfigurationOption>
}
