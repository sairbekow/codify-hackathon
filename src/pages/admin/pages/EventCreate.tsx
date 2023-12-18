import { TextField } from '@mui/material'
import Box from '@mui/material/Box/Box'
import React from 'react'

const EventCreate = () => {
  return (
    <div>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'>
        <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        <TextField id='filled-basic' label='Filled' variant='filled' />
        <TextField id='standard-basic' label='Standard' variant='standard' />
      </Box>
    </div>
  )
}

export default EventCreate
