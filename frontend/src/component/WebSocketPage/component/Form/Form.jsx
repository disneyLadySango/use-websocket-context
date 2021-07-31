import { useState, useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useForm = (sendMessage) => {
  const [message, setMessage] = useState('')
  const onChange = useCallback((event) => {
    setMessage(event.target.value)
  }, [])
  const onClick = useCallback(
    (event) => {
      event.preventDefault()
      sendMessage(message)
    },
    [message, sendMessage]
  )
  return [{ message }, { onChange, onClick }]
}

const Form = ({ sendMessage, placeholder, buttonText }) => {
  const [{ message }, { onChange, onClick }] = useForm(sendMessage)
  return (
    <div style={{ padding: '16px' }}>
      <TextField
        value={message}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button
        style={{ marginLeft: '12px' }}
        variant='contained'
        color='primary'
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default Form
