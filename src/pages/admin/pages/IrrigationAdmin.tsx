import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import Button from '@mui/material/Button'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import useStartRounds from '../../../hooks/api/useStartRounds'

function IrrigationAdmin() {
  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [startDate, setDate] = useState<Dayjs | null>(dayjs('2022-04-17'))
  const irigationCall = useStartRounds()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const obj = { startDate, coastForAnHectare: price, title, villageId: 15 }
    await irigationCall(obj)
  }

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: 800 },
      }}
      noValidate
      autoComplete='off'
      display='flex'
      flexDirection='column'
      alignItems='center'
      onSubmit={(e) => handleSubmit(e)}>
      <TextField
        type='text'
        id='filled-basic'
        label='Баш сөз'
        variant='filled'
        fullWidth
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        type='number'
        id='filled-basic'
        label='Баасы'
        variant='filled'
        fullWidth
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation='landscape'
          value={startDate}
          onChange={(newValue) => setDate(newValue)}
        />
      </LocalizationProvider>
      <Button type='submit' variant='contained'>
        Баштоо
      </Button>
    </Box>
  )
}

export default IrrigationAdmin
