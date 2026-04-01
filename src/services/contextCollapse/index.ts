// Stub for contextCollapse service (CONTEXT_COLLAPSE feature)
// Context collapse compresses long conversations to save tokens.

export type ContextCollapseEntry = {
  id: string
  summary: string
  startIndex: number
  endIndex: number
}

export type ContextCollapseResult = {
  entries: ContextCollapseEntry[]
  snapshot?: unknown
}

export async function performContextCollapse(_messages: unknown[]): Promise<ContextCollapseResult | null> {
  return null
}

export function isContextCollapseEnabled(): boolean {
  return false
}
