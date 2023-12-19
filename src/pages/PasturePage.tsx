import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../data/consts.ts'
import { getCurrentUser } from '../utils/cookie'

const PasturePage = () => {
  const username = getCurrentUser()

  return (
    <Box sx={{ pl: 5 }}>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        КҮЗГҮ ЖАЙЫТ АЯНТЫН АЛУУ ҮЧҮН СУРАМ ЖАРАТУУ
      </Typography>
      <Box sx={{ pl: 10, width: '90%' }}>
        <Typography variant='h4' component='p' sx={{ mb: 5 }}>
          {username}
        </Typography>
        <Typography sx={{ mb: 5 }}>МАЛДЫН САНЫН ӨЗГӨРТҮҮГӨ МҮМКҮН</Typography>
        <Typography sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
          ТОПОЗДУН САНЫ:{' '}
          <TextField id='outlined-basic' variant='outlined' value={32} />
        </Typography>
        <Typography sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
          КОЙДУН САНЫ:{' '}
          <TextField id='outlined-basic' variant='outlined' value={32} />
        </Typography>
        <Typography sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
          ЭЧКИНИН САНЫ:{' '}
          <TextField id='outlined-basic' variant='outlined' value={32} />
        </Typography>
        <Typography sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
          ЖЫЛКЫНЫН САНЫ:{' '}
          <TextField id='outlined-basic' variant='outlined' value={32} />
        </Typography>
        <Link to={AppRoutes.PASTURE_PAYMENT}>
          <Button variant='contained' size='large'>
            СУРАМ ЖӨНӨТҮҮ
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default PasturePage
