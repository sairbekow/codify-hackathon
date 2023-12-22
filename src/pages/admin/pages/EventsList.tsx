import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  TableHead,
  CardMedia,
  TableContainer,
} from '@mui/material'
import { useEffect } from 'react'
import { QueryPath } from '../../../data/consts'
import { IEvent, removeEvent, setEventData } from '../../../store/slices/eventSlice'
import { http } from '../../../utils/axios'
import DeleteIcon from '@mui/icons-material/Delete'

const EventsList = () => {
  const news: IEvent[] = useSelector((state: RootState) => state.eventState.eventList)
  const dispatch = useDispatch();

  const handleDelete = async (id: number) => {
    const response = await http.delete(`${QueryPath.DELETE_EVENT}${id}`)
    dispatch(removeEvent(id))
  }

  useEffect(() => {
    try {
      http.get(QueryPath.GET_ALL_EVENTS).then(({ data }) => {
        dispatch(setEventData({ eventList: data }))
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='left'>Title</TableCell>
            <TableCell align='left'>Content</TableCell>
            <TableCell align='left'>Image</TableCell>
            <TableCell align='left'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.title}
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.content}
              </TableCell>
              <TableCell component='th' scope='row'>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='auto'
                  width='auto'
                  image={row.image}
                />
              </TableCell>
              <TableCell component='th' scope='row'>
                <IconButton
                  onClick={() => handleDelete(row.id)}
                  aria-label='delete'
                  size='large'>
                  <DeleteIcon fontSize='inherit' />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EventsList
