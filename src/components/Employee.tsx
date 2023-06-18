import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { IEmployee } from '../pages/Employees.tsx'

const Employee = ({ fullname, position, image }: IEmployee) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={`data:image/png;base64, ${image}`}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {fullname}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {position}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Employee
