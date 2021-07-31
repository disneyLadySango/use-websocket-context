import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { useWebSocketMessage } from '../../../../hooks/useWebSocketMessage'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Toast = () => {
  const [states, actions] = useWebSocketMessage('point')
  return (
    <Snackbar
      open={states.open}
      autoHideDuration={4000}
      onClose={actions.onClose}
    >
      <Alert onClose={actions.onClose} severity='success'>
        {states.message}
      </Alert>
    </Snackbar>
  )
}

export default Toast
