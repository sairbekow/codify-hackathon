import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import eventImage from '../assets/images/event_1.jpeg'

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={eventImage}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>

          </Typography>
          <Typography variant='body2' color='text.secondary'>
            МинКаб Төрагасынын Баткен облусуна болгон иш сапарынын экинчи күнү:
            Баткен районунда 315 үйдүн курулушу аяктады
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
