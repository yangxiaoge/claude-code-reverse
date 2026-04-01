// Generated SDK core types (stub - normally generated from coreSchemas.ts)
// Run: bun scripts/generate-sdk-types.ts to regenerate

export type SDKMessage = {
  role: 'user' | 'assistant'
  content: string | Array<Record<string, unknown>>
}

export type SDKUserMessage = {
  role: 'user'
  content: string
}

export type SDKResultMessage = {
  role: 'assistant'
  content: string
  usage?: {
    input_tokens: number
    output_tokens: number
  }
}

export type SDKSessionInfo = {
  sessionId: string
  conversationId?: string
  createdAt?: string
  model?: string
}

export type HookEvent = string
export type ExitReason = string
