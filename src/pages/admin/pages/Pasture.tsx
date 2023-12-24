import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
import { http } from '../../../utils/axios.ts'
import { QueryPath } from '../../../data/consts.ts'
const Pasture = () => {
  const handlePastureStart = async() => {
    const data = {
      title: "Pasture 2023",
      startDate: new Date(Date.now()).toISOString(),
      coastForAnHectare: 100,
      villageId: 15
    }
    console.log(data)
    const response = await http.post(QueryPath.ROUNDS_CONTROLLER_START, data)
    console.log(response)
  }

  return (
    <Box>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        ЖАЙЫТ АЯНТТАРЫН БӨЛҮШТҮРҮҮ
      </Typography>
      <Button onClick={handlePastureStart} variant="contained">Баштоо</Button>
    </Box>
  );
};

export default Pasture;
