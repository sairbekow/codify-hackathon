import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import eventImage from '../assets/images/event_1.jpeg'
import Box from "@mui/material/Box";

const News = () => {
  const id: any = useParams().id
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Card sx={{ maxWidth: 600, marginTop: '100px' }}>
        <CardMedia
          component='img'
          alt='green iguana'
          height='300'
          image={eventImage}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Card id: {id}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default News
