import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { getCurrentUser } from '../utils/cookie'

const VetDepartment = () => {
  const username = getCurrentUser()
  return false ? (
    <Box sx={{ pl: 5 }}>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        МАЛ МҮЛКҮҢҮЗ ТУУРАЛУУ МААЛЫМАТ
      </Typography>
      <Box sx={{ pl: 10 }}>
        <Typography variant='h4' component='p' sx={{ mb: 5 }}>
          {username}
        </Typography>
        <Typography sx={{ mb: 5 }}>
          СИЗГЕ ТИЙИШТҮҮ МАЛ МҮЛКҮ ТАБЫЛГАН ЖОК.
        </Typography>
        <Typography sx={{ mb: 5 }}>
          ЭГЕР МААЛЫМАТТАРЫҢЫЗДЫ ЖАҢЫЛООНУ КААЛАСАҢЫЗ ЖЕРГИЛИКТҮҮ ӨЗҮН-ӨЗҮ
          БАШКАРУУ ОРГАНЫНА КАЙРЫЛЫҢЫЗ.
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box sx={{ pl: 5 }}>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        МАЛ МҮЛКҮҢҮЗ ТУУРАЛУУ МААЛЫМАТ
      </Typography>
      <Box sx={{ pl: 10 }}>
        <Typography variant='h4' component='p' sx={{ mb: 5 }}>
          {username}
        </Typography>
        <Typography sx={{ mb: 5 }}>
          УЙДУН САНЫ: <span>11</span>
        </Typography>
        <Typography sx={{ mb: 5 }}>
          ТОПОЗДУН САНЫ: <span>55</span>
        </Typography>
        <Typography sx={{ mb: 5 }}>
          КОЙДУН САНЫ: <span>12</span>
        </Typography>
        <Typography sx={{ mb: 5 }}>
          ЭЧКИНИН САНЫ: <span>21</span>
        </Typography>
        <Typography sx={{ mb: 5 }}>
          ЖЫЛКЫНЫН САНЫ: <span>34</span>
        </Typography>
        <Button variant='contained' size='large'>
          ДОКУМЕНТ ЖАРАТУУ
        </Button>
      </Box>
    </Box>
  )
}

export default VetDepartment
