// Stub for modifiers-napi (native keyboard modifier detection)
// Returns false for all modifier keys - used for macOS computer use feature

export function prewarm(): void {}

export function isModifierPressed(_modifier: string): boolean {
  return false
}
