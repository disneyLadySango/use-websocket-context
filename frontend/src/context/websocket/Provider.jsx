import React, { createContext } from 'react'
import { useWebSocketCore } from './useWebSocketCore'

export const WebSocketStateContext = createContext(null)
export const WebSocketActionContext = createContext(null)

export const WebSocketProvider = ({ children }) => {
  const [states, actions] = useWebSocketCore()
  return (
    <WebSocketStateContext.Provider value={states}>
      <WebSocketActionContext.Provider value={actions}>
        {children}
      </WebSocketActionContext.Provider>
    </WebSocketStateContext.Provider>
  )
}
