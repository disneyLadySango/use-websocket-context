import { useState, useCallback, useEffect } from 'react'
import { useWebSocketState } from '../context/websocket'

export const useWebSocketMessage = (messageType) => {
  const { lastJsonMessage } = useWebSocketState()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (lastJsonMessage?.messageType !== messageType) return
    if (!lastJsonMessage?.message) return
    setMessage(lastJsonMessage.message)
    setOpen(true)
  }, [lastJsonMessage, messageType])

  const onClose = useCallback(() => {
    setOpen(false)
    setMessage('')
  }, [])

  return [{ message, open }, { onClose }]
}
