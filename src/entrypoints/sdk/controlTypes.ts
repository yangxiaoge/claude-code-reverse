// SDK control protocol types (alpha)
export type SDKControlRequest = {
  type: string
  payload?: Record<string, unknown>
}

export type SDKControlResponse = {
  type: string
  success: boolean
  payload?: Record<string, unknown>
  error?: string
}
