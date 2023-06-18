import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const AnimalPage = () => {
  return (
    <Box sx={{ pl: 5 }}>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        <span>Уй</span> ТУУРАЛУУ МААЛЫМАТ
      </Typography>
      <Box sx={{ pl: 10, pr: 10 }}>
        <Typography variant='h4' component='p' sx={{ mb: 5 }}>
          ТАШИЕВ ЭМИР САЛМООРБЕКОВИЧТИН МҮЛКҮ
        </Typography>
        {[1, 2, 3].map((item) => (
          <Box key={item} sx={{border: '1px solid gray', borderRadius: '5px', p: 3, mt: 5, mb: 5}}>
            <Typography sx={{ mb: 1 }}>КРГ 1 7890</Typography>
            <Typography sx={{ mb: 1 }}>
              ТҮСҮ: <span>САРЫ АЛА</span>
            </Typography>
            <Typography sx={{ mb: 1 }}>
              ЖАШЫ: <span>2 ЖАШ</span>
            </Typography>
          </Box>
        ))}
        <Button variant='contained' size='large'>
          ДОКУМЕНТ ЖАРАТУУ
        </Button>
      </Box>
    </Box>
  )
}

export default AnimalPage
