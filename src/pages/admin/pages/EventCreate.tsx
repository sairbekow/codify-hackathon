import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'
import { FormEvent, useState } from 'react'

const EventCreate = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [image, setImage] = useState<string>('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(title, content, image)
  }

  return (
    <div>
      <Box
        onSubmit={onSubmit}
        component='form'
        sx={{
          margin: '0 auto',
          minWidth: '300px',
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 20,
        }}
        noValidate
        autoComplete='off'>
        <center>
          <Typography variant='h2' component='div'>
            Create new event
          </Typography>
        </center>
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id='outlined-basic'
          label='Title'
          variant='outlined'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id='filled-basic'
          label='Content'
          variant='filled'
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <TextField
          sx={{ mb: 2 }}
          fullWidth
          id='standard-basic'
          variant='filled'
          type='file'
          onChange={(event) => {
            const image = event.target.value
            setImage(image.toString())
          }}
        />
        <Button type='submit' variant='contained'>
          Send
        </Button>
      </Box>
    </div>
  )
}

export default EventCreate
