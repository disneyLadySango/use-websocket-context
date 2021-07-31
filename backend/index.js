const express = require('express')

const app = express()
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8000 })

wss.on(
  'connection',
  (connection = (ws) => {
    ws.on(
      'message',
      (incoming = (msg) => {
        console.log('received:', msg)
        const { type, message } = JSON.parse(msg)
        const isModalMessage = type === 'modal'
        const messageType = isModalMessage ? 'rankup' : 'point'
        const delay = isModalMessage ? 0 : 1000
        setTimeout(() => {
          ws.send(
            JSON.stringify({
              messageType,
              message,
            })
          )
        }, delay)
      })
    )
    ws.send(
      JSON.stringify({
        messageType: 'connection',
        message: 'start',
      })
    )
  })
)

console.log('START_EXPRESS_APP')
app.listen(8001)
