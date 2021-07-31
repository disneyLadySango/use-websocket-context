import '../styles/globals.css'
import { WebSocketProvider } from '../src/context/websocket'

function MyApp({ Component, pageProps }) {
  return (
    <WebSocketProvider>
      <Component {...pageProps} />
    </WebSocketProvider>
  )
}

export default MyApp
