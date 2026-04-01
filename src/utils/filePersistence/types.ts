// Types for file persistence (FILE_PERSISTENCE feature)

export const OUTPUTS_SUBDIR = '.claude/outputs'
export const FILE_COUNT_LIMIT = 1000
export const DEFAULT_UPLOAD_CONCURRENCY = 5

export type TurnStartTime = number

export type PersistedFile = {
  path: string
  fileId: string
  size: number
}

export type FailedPersistence = {
  path: string
  error: string
}

export type FilesPersistedEventData = {
  success: number
  failed: number
  skipped: number
  totalBytes: number
  durationMs: number
}
