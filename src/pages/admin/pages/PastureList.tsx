import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { http } from '../../../utils/axios.ts'
import { QueryPath } from '../../../data/consts.ts'

const MyComponent = () => {
  const [rounds, setRounds] = useState([])

  useEffect(() => {
    const fetchRounds = async () => {
      const response = await http.get(`${QueryPath.ROUNDS_CONTROLLER_GETBYID}15`)
      console.log(response)
      setRounds(response.data)
    }
    fetchRounds()
  }, [])

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
      {rounds.map((item) => (
        <Box key={item} sx={{ borderRadius: '5px', border: '1px solid gray', padding: '5px 15px', mt: '5px', mb: '5px' }}>
          <Typography>Title: {item.title}</Typography>
          <Typography>Start Date: {item.startDate}</Typography>
          <Typography>Village Id: {item.villageId}</Typography>
          <Typography>Coast For An Hectare: {item.coastForAnHectare}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default MyComponent
