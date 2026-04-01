// Stub for @ant/computer-use-swift (Anthropic internal Swift binding)

export type ComputerUseAPI = {
  screenshot: () => Promise<Buffer>
  getScreenDimensions: () => Promise<{ width: number; height: number }>
}
