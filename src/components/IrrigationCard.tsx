import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface IProps {
  ownerFullname: string
  ownerPin: string
  areaTitle: string
  startDate: string
  status: number
}

const IrrigationCard = ({
  startDate,
  ownerFullname,
  status,
  areaTitle,
}: IProps) => {
  const date = new Date(startDate).toLocaleTimeString()
  const time = new Date(startDate).toLocaleDateString()

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
          sx={{ marginBottom: 1.5, marginTop: 1.5, color: '#2F5AA8' }}
          color='text.secondary'
          variant='h4'
          component='p'>
          {ownerFullname}
        </Typography>
        <Typography variant='h5' sx={{ mb: 2 }} component='p'>
          {areaTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default IrrigationCard
