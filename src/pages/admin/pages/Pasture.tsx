import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button'
const Pasture = () => {
  return (
    <Box>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        ЖАЙЫТ АЯНТТАРЫН БӨЛҮШТҮРҮҮ
      </Typography>
      <Button variant="contained">Баштоо</Button>
    </Box>
  );
};

export default Pasture;
