import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import { QueryPath } from '../data/consts'

interface ICard {
  title: string
  content: string
  image: string
  id: number
}

export default function Event({ id,title, image }: ICard) {
  return (
    <Link to={`${QueryPath.GET_EVENT}${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={`data:image/png;base64, ${image}`}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'></Typography>
            <Typography variant='body2' color='text.secondary'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
