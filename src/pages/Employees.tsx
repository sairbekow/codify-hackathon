import Employee from '../components/Employee.tsx'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { QueryPath } from '../data/consts'
import { http } from '../utils/axios'

export interface IEmployee {
  fullname: string
  position: string
  image: string
  content: string
  id?: number
}

const Employees = () => {
  const [employees, setEmployees] = useState<null | IEmployee[]>(null)

  useEffect(() => {
    http.get<IEmployee[]>(QueryPath.EMPLOYEE_GET_ALL).then(({ data }) => {
      setEmployees(data)
      console.log(data)
    })
  })

  return (
    <Box display='flex' justifyContent='center' gap={1} flexWrap='wrap'>
      {employees &&
        employees.map((employee) => (
          <Employee
            fullname={employee.fullname}
            position={employee.position}
            image={employee.image}
            content={employee.content}
          />
        ))}
    </Box>
  )
}

export default Employees
