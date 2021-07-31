import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { attachListener } from './handlers'

export const useWebSocketCore = () => {
  // メッセージ
  const [lastMessage, setLastMessage] = useState(null)
  // JSON形式のメッセージ
  const lastJsonMessage = useMemo(() => {
    try {
      const jsonMessage = JSON.parse(lastMessage?.data)
      return jsonMessage
    } catch {
      return null
    }
  }, [lastMessage])
  // WebScoketインスタンス
  const webSocketRef = useRef(null)
  // アンマウントかどうかの判別フラグ
  const didUnmmount = useRef(false)

  useEffect(() => {
    webSocketRef.current = new WebSocket('ws://localhost:8000')
    if (!webSocketRef.current) {
      throw new Error('WebSocket failed to be created')
    }
    // アンマウント時に実行するListener
    let removeListeners
    // 接続処理
    const start = () => {
      if (!webSocketRef.current) return
      removeListeners = attachListener(webSocketRef.current, setLastMessage)
    }
    start()
    // アンマウント時の処理
    return () => {
      didUnmmount.current = true
      removeListeners?.()
      setLastMessage(null)
    }
  }, [])

  const sendModalMessage = useCallback((message) => {
    webSocketRef.current?.send(
      JSON.stringify({
        type: 'modal',
        message,
      })
    )
  }, [])
  const sendToastMessage = useCallback((message) => {
    webSocketRef.current?.send(
      JSON.stringify({
        type: 'toast',
        message,
      })
    )
  }, [])
  return [
    { lastMessage, lastJsonMessage },
    { sendModalMessage, sendToastMessage },
  ]
}
