// Stub for snipCompact (HISTORY_SNIP feature - disabled)
import type { MessageParam } from '@anthropic-ai/sdk/resources/messages.js'

export async function snipCompact(_messages: MessageParam[]): Promise<MessageParam[]> {
  return _messages
}

export function shouldSnipCompact(_messages: MessageParam[]): boolean {
  return false
}

export function getSnipCompactResult(_messages: MessageParam[]): null {
  return null
}
