import { useContext } from 'react'
import { WebSocketStateContext, WebSocketActionContext } from './Provider'

export const useWebSocketState = () => {
  const context = useContext(WebSocketStateContext)
  if (context === null) {
    throw new Error(
      `useWebSocketStateはWebSocketのProviderの子要素で使用してください`
    )
  }
  return context
}

export const useWebSocketAction = () => {
  const context = useContext(WebSocketActionContext)
  if (context === null) {
    throw new Error(
      `useWebSocketActionはWebSocketのProviderの子要素で使用してください`
    )
  }
  return context
}
