import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AppRoutes } from './data/consts'
import SignIn from './pages/Signin'
import Admin from './pages/admin'
import Users from './pages/admin/Users'
import Regions from './pages/admin/Regions'
import Payments from './pages/admin/Payments'
import EventList from './pages/EventList'
import VilageHistory from './pages/VilageHistory'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Home />}>
        <Route index element={<EventList />} />
        <Route path={AppRoutes.VILAGE_HISTORY} element={<VilageHistory />} />
      </Route>
      <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
      <Route path={AppRoutes.ADMIN}>
        <Route index element={<Admin />} />
        <Route path={AppRoutes.USERS} element={<Users />} />
        <Route path={AppRoutes.REGIONS} element={<Regions />} />
        <Route path={AppRoutes.PAYMENTS} element={<Payments />} />
      </Route>
      <Route path='*' element={<h1 className='container'>404</h1>} />
    </Routes>
  )
}

export default AppRouter
