// Polyfill React.use() for React 18 (it's a React 19 feature)
import React from 'react';

type Usable<T> = (Promise<T> & { status?: string; value?: T; reason?: unknown }) | { $$typeof: symbol; _currentValue: unknown };

function usePolyfill<T>(usable: Usable<T>): T {
  if (usable && typeof (usable as any).then === 'function') {
    const promise = usable as Promise<T> & { status?: string; value?: T; reason?: unknown };
    if (promise.status === 'fulfilled') return promise.value as T;
    if (promise.status === 'rejected') throw promise.reason;
    if (promise.status !== 'pending') {
      promise.status = 'pending';
      promise.then(
        (v: T) => { promise.status = 'fulfilled'; promise.value = v; },
        (e: unknown) => { promise.status = 'rejected'; promise.reason = e; }
      );
    }
    throw promise; // Trigger Suspense
  }
  // Context support
  if (usable && (usable as any).$$typeof === Symbol.for('react.context')) {
    return (usable as any)._currentValue as T;
  }
  throw new Error('React.use() argument must be a Promise or Context');
}

// Patch React module
if (typeof (React as any).use !== 'function') {
  (React as any).use = usePolyfill;
}

// Re-export everything from react, plus the polyfill
export * from 'react';
export default React;
export const use = (React as any).use as typeof usePolyfill;
