/**
 * Shim for bun:bundle when building externally.
 * feature() always returns false, disabling all internal Anthropic features.
 * Dead code elimination will remove the unreachable branches at bundle time.
 */
export function feature(_name: string): boolean {
  return false
}
