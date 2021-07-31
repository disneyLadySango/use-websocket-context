/**
 * message受信時のイベントハンドラ
 *
 * @param webSocketInstance
 * @param dispatchLastMessage
 */
const bindMessageHandler = (webSocketInstance, dispatchLastMessage) => {
  webSocketInstance?.addEventListener('message', (message) => {
    console.log('SOCKET_MESSAGE', message)
    dispatchLastMessage(message)
  })
}

/**
 * コネクション接続時のイベントハンドラ
 *
 * @param webSocketInstance
 */
const bindOpenHandler = (webSocketInstance) => {
  webSocketInstance?.addEventListener('open', () => {
    console.log('SOCKET_OPEN')
  })
}

/**
 * コネクション切断時のイベントハンドラ
 *
 * @param webSocketInstance
 */
const bindCloseHandler = (webSocketInstance) => {
  webSocketInstance?.addEventListener('close', (event) => {
    console.log('SOCKET_CLOSE', event)
  })
}

/**
 * エラー時のイベントハンドラ
 *
 * @param webSocketInstance
 */
const bindErrorHandler = (webSocketInstance) => {
  webSocketInstance?.addEventListener('error', (error) => {
    console.log('SOCKET_ERROR', error)
  })
}

/**
 * WebSocketインスタンスへ各種イベントを登録する処理
 *
 * @param webSocketInstance WebSocketのインスタンス
 * @param options オプション設定
 * @param reconnectCount 再コネクションを実行した回数のRefオブジェクト
 * @param dispatchs dispatchの処理群
 * @param reconnect 再コネクション処理
 */
export const attachListener = (webSocketInstance, dispatchLastMessage) => {
  bindOpenHandler(webSocketInstance)
  bindMessageHandler(webSocketInstance, dispatchLastMessage)
  bindCloseHandler(webSocketInstance)
  bindErrorHandler(webSocketInstance)
  return () => {
    webSocketInstance?.close()
  }
}
