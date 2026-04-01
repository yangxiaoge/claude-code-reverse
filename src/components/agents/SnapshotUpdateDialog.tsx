// Stub for SnapshotUpdateDialog (AGENT_MEMORY_SNAPSHOT feature - disabled)
import React from 'react'

interface Props {
  agentType: string
  scope: unknown
  snapshotTimestamp: string
  onComplete: (result: 'merge' | 'keep' | 'replace') => void
  onCancel: () => void
}

export function SnapshotUpdateDialog({ onCancel }: Props): React.ReactElement {
  return React.createElement('div', null, 'Snapshot update dialog (stub)')
}
