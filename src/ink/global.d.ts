// Global type declarations for Ink terminal UI
// Augments JSX with terminal-specific element types

declare global {
  // Terminal UI elements rendered by Ink's reconciler
  namespace JSX {
    interface IntrinsicElements {
      'ink-box': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'ink-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'ink-newline': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
      'ink-spacer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    }
  }
}

export {}
