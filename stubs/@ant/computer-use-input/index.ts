// Stub for @ant/computer-use-input (Anthropic internal native package)

export type ComputerUseInputAPI = {
  key: (key: string) => Promise<void>
  keys: (keys: string[]) => Promise<void>
  type: (text: string) => Promise<void>
  mouseMove: (x: number, y: number) => Promise<void>
  mouseClick: (button: 'left' | 'right' | 'middle') => Promise<void>
  scroll: (x: number, y: number, direction: 'up' | 'down', clicks: number) => Promise<void>
}

export type ComputerUseInput =
  | ({ isSupported: false })
  | ({ isSupported: true } & ComputerUseInputAPI)

const stub: ComputerUseInput = { isSupported: false }

export default stub
export const isSupported = false
