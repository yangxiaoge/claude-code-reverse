// Stub for SDK runtime types
import type { ZodRawShape, ZodTypeAny, z } from 'zod'

export type AnyZodRawShape = ZodRawShape
export type InferShape<T extends ZodRawShape> = z.infer<z.ZodObject<T>>

export type EffortLevel = 'low' | 'medium' | 'high' | 'auto'

export type Options = {
  maxTurns?: number
  timeout?: number
  model?: string
  effortLevel?: EffortLevel
}

export type InternalOptions = Options & {
  sessionId?: string
}

export type Query = {
  prompt: string
  options?: Options
}

export type InternalQuery = Query & {
  sessionId?: string
}

export type SDKSession = {
  sessionId: string
  conversationId: string
}

export type SDKSessionOptions = {
  model?: string
  effortLevel?: EffortLevel
}

export type SandboxConfig = Record<string, unknown>

export type McpSdkServerConfigWithInstance = {
  name: string
  config: Record<string, unknown>
}

export type SdkMcpToolDefinition = {
  name: string
  description?: string
  inputSchema?: Record<string, unknown>
}

export type ListSessionsOptions = {
  limit?: number
  offset?: number
}

export type GetSessionInfoOptions = {
  sessionId: string
}

export type GetSessionMessagesOptions = {
  sessionId: string
  limit?: number
}

export type SessionMessage = {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

export type SessionMutationOptions = {
  sessionId: string
}

export type ForkSessionOptions = SessionMutationOptions & {
  prompt?: string
}

export type ForkSessionResult = {
  sessionId: string
}

export type SandboxAskCallback = (question: string) => Promise<string>
export type SandboxDependencyCheck = () => Promise<boolean>
