import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface IProps {
  date: string
  time: string
  fullname: string
  target: string
  status: string
}

const IrrigationCard = ({ date, time, fullname, target, status }: IProps) => {
  return (
    <Card
      variant='outlined'
      sx={{
        width: 300,
        height: 250,
      }}>
      <CardContent>
        <Typography color='text.secondary' gutterBottom>
          {date}
        </Typography>
        <Typography variant='h5' component='div'>
          {time}
        </Typography>
        <Typography
          sx={{ mb: 1.5 }}
          color='text.secondary'
          variant='h4'
          component='p'>
          {fullname}
        </Typography>
        <Typography variant='h5' sx={{ mb: 2 }} component='p'>
          {target}
        </Typography>
        <Typography variant='body2'>{status}</Typography>
      </CardContent>
    </Card>
  )
}

export default IrrigationCard
