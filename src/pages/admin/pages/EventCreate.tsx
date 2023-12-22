import { Button, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box/Box'
import { FormEvent, useState } from 'react'
import { http } from '../../../utils/axios'
import { QueryPath } from '../../../data/consts'

const EventCreate = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [imageString, setImageString] = useState<string | ArrayBuffer | null>(
    ''
  )
  const [image, setImage] = useState()

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      title: title,
      content: content,
      image: imageString,
    }
    console.log(data)
    const response = await http.post(
      QueryPath.CREATE_EVENT,
      data
    )
    console.log(response)
  }

  async function getBaseUrl() {
    var file = document.querySelector('input[type=file]')['files'][0]
    var reader = new FileReader()
    var baseString
    reader.onloadend = function () {
      baseString = reader.result
      setImageString(reader.result)
    }
    reader.readAsDataURL(file)
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
        <input
          style={{ marginBottom: '10px', width: '100%' }}
          id='img'
          type='file'
          accept='image/'
          onChange={getBaseUrl}
        />
        <Button type='submit' variant='contained'>
          Send
        </Button>
      </Box>
    </div>
  )
}

export default EventCreate
