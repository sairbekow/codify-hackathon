import IrrigationCard from '../components/IrrigationCard.tsx'
import Box from '@mui/material/Box'
import dayjs from 'dayjs'
import { DateCalendar } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { http } from '../utils/axios'
import { QueryPath } from '../data/consts'

const irrigations = [
  {
    date: '12.02.2021',
    time: '13:00',
    fullname: 'argen sairbekov',
    target: 'kashar',
    status: 'sugardy',
  },
  {
    date: '13.02.2021',
    time: '11:00',
    fullname: 'meerim altynbekova',
    target: 'oguz',
    status: 'sugaryp jatat',
  },
  {
    date: '14.02.2021',
    time: '9:00',
    fullname: 'avtandil toltoev',
    target: 'kashar',
    status: 'sugardy',
  },
]

const Irrigation = () => {

  useEffect(() => {
    http.get(QueryPath.ROUNDS_CONTROLLER).then(({ data }) => {

    })
  })

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}>
          {irrigations.map((item) => (
            <IrrigationCard key={item.fullname} {...item} />
          ))}
          <Box>
            <Typography align='center' variant='h3' component='p'>
              Сиздин кезегиңиз
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
              }}>
              <IrrigationCard
                date={'15.06.2023'}
                time={'12:00'}
                fullname={'Emir Tashiev'}
                target={'Oguz'}
                status={'Sugarat'}
              />
              <DateCalendar defaultValue={dayjs('2022-04-17')} />
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
    </div>
  )
}

export default Irrigation
