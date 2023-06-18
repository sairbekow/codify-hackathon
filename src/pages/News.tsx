import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { http } from '../utils/axios'
import { QueryPath } from '../data/consts'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { setCurrentEvent } from '../store/slices/eventSlice'

const News = () => {
  const id: any = useParams().id
  const dispatch = useAppDispatch()
  const newsData = useAppSelector((state) => state.eventState.currentEvent)

  useEffect(() => {
    http.get(`${QueryPath.GET_EVENT}${id}`).then(({ data }) => {
      console.log(data)
      dispatch(setCurrentEvent(data))
    })
  }, [])

  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Card sx={{ maxWidth: 600, marginTop: '10px' }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='300'
          image={`data:image/png;base64, ${newsData.image}`}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {newsData.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {newsData.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Бөлүшүү</Button>
          <Button size='small'>үйрөнүү</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default News
