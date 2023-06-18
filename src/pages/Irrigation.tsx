import IrrigationCard from '../components/IrrigationCard.tsx'
import Box from '@mui/material/Box'
import dayjs from 'dayjs'
import { DateCalendar } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { http } from '../utils/axios'
import { QueryPath } from '../data/consts'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setIrrigationData } from '../store/slices/irrigationSlice'
import { getCurrentUser } from '../utils/cookie'

const Irrigation = () => {
  const { villageId } = getCurrentUser()
  const [day, setDay] = useState(1)
  const dispatch = useAppDispatch()
  const username = getCurrentUser()
  const irrigationList = useAppSelector(
    (state) => state.irrigationState.irrigationList
  )

  console.log(username)
  useEffect(() => {
    http.get(`${QueryPath.ROUNDS_CONTROLLER}${15}`).then(({ data }) => {
      console.log(data)
      dispatch(setIrrigationData({ irrigationList: data }))
    })
  }, [])

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
          {irrigationList.slice(0, 3).map((item) => {
            return <IrrigationCard key={item.ownerFullname} {...item} />
          })}
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
                startDate={day}
                time={'12:00'}
                ownerFullname={username}
                ownerPin={'Ойуз'}
              />
              <DateCalendar
                onChange={(date) => setDay(date)}
                defaultValue={dayjs('2022-04-17')}
              />
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
    </div>
  )
}

export default Irrigation
