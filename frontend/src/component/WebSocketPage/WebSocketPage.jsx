import React from 'react'

import { useWebSocketAction } from '../../context/websocket'
import Form from './component/Form'
import Modal from './component/Modal'
import Toast from './component/Toast'

const WebSocketPage = () => {
  const contextAction = useWebSocketAction()
  return (
    <div>
      <h1>Hello Testing WebSocket</h1>
      <Form
        sendMessage={contextAction.sendModalMessage}
        placeholder='modal message'
        buttonText='SEND MODAL MESSAGE'
      />
      <Form
        sendMessage={contextAction.sendToastMessage}
        placeholder='toast message'
        buttonText='SEND TOAST MESSAGE'
      />
      <Modal />
      <Toast />
    </div>
  )
}

export default WebSocketPage
