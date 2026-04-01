// Stub for contextCollapse persistence
import type { ContextCollapseEntry } from './index.js'

export async function persistContextCollapse(_entries: ContextCollapseEntry[], _snapshot?: unknown): Promise<void> {}

export async function restoreFromEntries(_entries: ContextCollapseEntry[], _snapshot?: unknown): Promise<unknown[]> {
  return []
}
