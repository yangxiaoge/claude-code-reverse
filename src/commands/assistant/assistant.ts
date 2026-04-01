// Stub for assistant command (KAIROS feature - disabled)
import React from 'react'

interface Props {
  defaultDir: string
  onInstalled: (dir: string) => void
  onCancel: () => void
  onError: (message: string) => void
}

export function NewInstallWizard(_props: Props): React.ReactElement {
  return React.createElement('div', null, 'Install wizard (stub)')
}

export async function computeDefaultInstallDir(): Promise<string> {
  return process.env.HOME ?? '/tmp'
}
