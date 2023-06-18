import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from "@mui/material/IconButton";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

function createData(
  name: string,
  area: number,
  receipt: string,
  confirmation: number
) {
  return { name, area, receipt, confirmation }
}

const rows = [
  createData('Frozen yoghurt', 159, '6.0', 24),
  createData('Ice cream sandwich', 237, '9.0', 37),
  createData('Eclair', 262, '16.0', 24),
  createData('Cupcake', 305, '3.7', 67),
  createData('Gingerbread', 356, '16.0', 49),
]

const PastureConfirm = () => {
  const handleActivate = (): void => {
    console.log('activate')
  }

  const handleReject = (): void => {
    console.log('reject')
  }

  return (
    <Box>
      <Typography
        variant='h3'
        component='p'
        sx={{ backgroundColor: '#2F5AA8', padding: '5px 15px', mb: 5 }}
        color='white'>
        ТӨРӨ-БЕЛ ЖАЙЫТЫН ЭЭЛӨӨ СУРАМДАРЫ
      </Typography>
      <Typography>
        ЖАЛПЫ: <span>25</span> ГА
      </Typography>
      <TableContainer component={Paper} sx={{mt: 5}}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Аты-жөнү</TableCell>
              <TableCell align='center'>Аянт</TableCell>
              <TableCell align='center'>Чек</TableCell>
              <TableCell align='center'>Тастыктоо</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.area}</TableCell>
                <TableCell align='center'>{row.receipt}</TableCell>
                <TableCell align='center'>
                  <IconButton onClick={() => handleActivate()} aria-label='delete'>
                    <DoneIcon color='success' />
                  </IconButton>
                  <IconButton onClick={() => handleReject()} aria-label='delete'>
                    <ClearIcon color='error' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default PastureConfirm
