import img1 from '../assets/images/event_1.jpeg'
import Employee from "../components/Employee.tsx";
import Box from "@mui/material/Box";

export interface IEmployee {
  name: string
  position: string
  imageUrl: string
}

const employees: IEmployee[] = [
  {name: 'asan', position: 'tester', imageUrl: img1},
  {name: 'tarik', position: 'ui/ux', imageUrl: img1},
  {name: 'argo', position: 'Fortran senior developer', imageUrl: img1},
  {name: 'beka', position: '.net', imageUrl: img1}
]

const Employees = () => {
  return (
    <Box display='flex' justifyContent="center" gap={1} flexWrap='wrap'>
      {employees.map((employee) => (
        <Employee name={employee.name} position={employee.position} imageUrl={employee.imageUrl}/>
      ))}
    </Box>
  );
};

export default Employees;