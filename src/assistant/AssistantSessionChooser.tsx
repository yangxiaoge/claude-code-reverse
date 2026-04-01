import React from 'react'
import type { AssistantSession } from './sessionDiscovery.js'

interface Props {
  sessions: AssistantSession[]
  onSelect: (id: string) => void
  onCancel: () => void
}

export function AssistantSessionChooser({ onCancel }: Props): React.ReactElement {
  return React.createElement('div', null, 'Assistant session chooser (stub)')
}
