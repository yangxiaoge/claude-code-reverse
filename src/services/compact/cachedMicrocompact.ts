// Stub for cachedMicrocompact (CACHED_MICROCOMPACT feature - disabled)
export type CachedMCState = {
  lastCompactionToken: number
  messages: unknown[]
}

export function getCachedMCState(): CachedMCState | null {
  return null
}

export function setCachedMCState(_state: CachedMCState | null): void {}
