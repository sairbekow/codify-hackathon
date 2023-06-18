import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const MyComponent = () => {
  return (
    <Box>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        ЖАЙЫТ АЯНТТАРЫН БӨЛҮШТҮРҮҮ
      </Typography>
      <Typography>
        БАРСКООН АЙЫЛ АЙМАГЫНА ТИЙИШТҮҮ ЖАЛПЫ 248 ГА ЖАЙЫТ АЯНТЫ БАР
      </Typography>
      {[1, 2, 3].map((item) => (
        <Box key={item} sx={{ borderRadius: '5px', border: '1px solid gray', padding: '5px 15px', mt: '5px', mb: '5px' }}>
          <Typography>СЫРТ ЖАЙЫТЫ</Typography>
          <Typography>
            ЖАЛПЫ АЯНТЫ: <span>20</span> ГА
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default MyComponent
