// Shim for react/compiler-runtime (React Compiler for React 18)
// The `c` function creates a memoization cache for compiled components
export function c(size: number): unknown[] {
  return new Array(size).fill(Symbol.for('react.memo_cache_sentinel'))
}
