import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TableVirtuoso, TableComponents } from 'react-virtuoso'
import Button from '@mui/material/Button'

interface Data {
  id: number
  area: number
  owner: string
  date: string
  price: number
}

interface ColumnData {
  dataKey: keyof Data
  label: string
  numeric?: boolean
  width: number
}

type Sample = [number, string, string, number]

const sample: readonly Sample[] = [
  [20, 'Word', '16.02.2001 12:00', 400],
  [20, 'Key', '16.02.2001 12:00', 300],
  [20, 'Letter', '16.02.2001 12:00', 500],
  [20, 'Note', '16.02.2001 12:00', 400],
  [20, 'Print', '16.02.2001 12:00', 100],
]

function createData(
  id: number,
  area: number,
  owner: string,
  date: string,
  price: number
): Data {
  return { id, area, owner, date, price }
}

const columns: ColumnData[] = [
  {
    width: 200,
    label: 'Жердин номуру',
    dataKey: 'id',
    numeric: true,
  },
  {
    width: 120,
    label: 'Аянты',
    dataKey: 'area',
    numeric: true,
  },
  {
    width: 120,
    label: 'Ээси',
    dataKey: 'owner',
    numeric: false,
  },
  {
    width: 120,
    label: 'Датасы',
    dataKey: 'date',
    numeric: false,
  },
  {
    width: 120,
    label: 'Баасы',
    dataKey: 'price',
    numeric: true,
  },
]

const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)]
  return createData(index, ...randomSelection)
})

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
}

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant='head'
          align='center'
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}>
          {column.label}
        </TableCell>
      ))}
      <TableCell
        variant='head'
        align='center'
        style={{ width: 120 }}
        sx={{
          backgroundColor: 'background.paper',
        }}>
        Кнопка
      </TableCell>
    </TableRow>
  )
}

function rowContent(_index: number, row: Data) {

  const handleClick = (): void => {
    console.log('click')
  }

  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align='center'>
          {row[column.dataKey]}
        </TableCell>
      ))}
      <TableCell align='center'>
        <Button onClick={() => handleClick()} variant='contained'>Токтотуу</Button>
      </TableCell>
    </React.Fragment>
  )
}

export default function IrrigationsList() {
  return (
    <Paper style={{ height: 800, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  )
}
