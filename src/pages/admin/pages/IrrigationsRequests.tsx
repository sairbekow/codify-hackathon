import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'

function createData(
  name: string,
  area: number,
  receipt: string,
  confirmation: number
) {
  return { name, area, receipt, confirmation }
}

const rows = [
  createData('Tashiev Emir', 237, ' ', 37),
  createData('Jaichibekov Kantemir', 262, ' ', 24),
  createData('Kabylov Bektursun', 305, ' ', 67),
  createData('Tolonov Avtandil', 356, ' ', 49),
]

export default function IrrigationsRequests() {
  const handleActivate = (): void => {
    console.log('activate')
  }

  const handleReject = (): void => {
    console.log('reject')
  }

  return (
    <TableContainer component={Paper}>
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
  )
}
