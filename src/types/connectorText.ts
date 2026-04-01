// Stub for connector text block type (internal Anthropic feature)
export type ConnectorTextBlock = {
  type: 'connector_text'
  text: string
}

export function isConnectorTextBlock(block: unknown): block is ConnectorTextBlock {
  return (
    typeof block === 'object' &&
    block !== null &&
    'type' in block &&
    (block as { type: unknown }).type === 'connector_text'
  )
}
