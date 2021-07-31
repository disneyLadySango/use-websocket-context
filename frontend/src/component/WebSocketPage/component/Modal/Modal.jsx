import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

import { useWebSocketMessage } from '../../../../hooks/useWebSocketMessage'

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction='up' ref={ref} {...props} />
})

const Modal = () => {
  const [state, action] = useWebSocketMessage('rankup')
  return (
    <div>
      <Dialog
        open={state.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={action.onClose}
      >
        <DialogTitle>RECIEVE WEBSOCKET MESSAGE</DialogTitle>
        <DialogContent>
          <DialogContentText>{state.message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={action.onClose} color='primary'>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Modal
