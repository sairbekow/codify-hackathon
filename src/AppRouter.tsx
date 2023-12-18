import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AppRoutes } from './data/consts'
import SignIn from './pages/Signin'
import Admin from './pages/admin'
import IrrigationAdmin from './pages/admin/pages/IrrigationAdmin.tsx'
import Users from './pages/admin/pages/Users.tsx'
import Regions from './pages/admin/pages/Regions.tsx'
import Payments from './pages/admin/pages/Payments.tsx'
import IrrigationsList from './pages/admin/pages/IrrigationsList.tsx'
import IrrigationsRequests from './pages/admin/pages/IrrigationsRequests.tsx'
import EventList from './pages/EventList'
import VilageHistory from './pages/VilageHistory'
import Contacts from './pages/Contacts'
import { getCurrentUser } from './utils/cookie'
import Vacancies from './pages/Vacancies'
import News from './pages/News.tsx'
import Employees from './pages/Employees.tsx'
import Irrigation from './pages/Irrigation.tsx'
import VetDepartment from './pages/VetDepartment.tsx'
import AnimalPage from './pages/AnimalPage.tsx'
import PasturePage from './pages/PasturePage.tsx'
import PasturePayment from './pages/PasturePayment.tsx'
import Pasture from './pages/admin/pages/Pasture.tsx'
import PastureList from './pages/admin/pages/PastureList.tsx'
import PastureConfirm from './pages/admin/pages/PastureConfirm.tsx'

const AppRouter = () => {
  const isUserLogged = getCurrentUser()
  return (
    <Routes>
      <Route path={AppRoutes.SIGNIN} element={<SignIn />} />
      {isUserLogged && (
        <>
          <Route path={AppRoutes.HOME} element={<Home />}>
            <Route index element={<EventList />} />
            <Route path={AppRoutes.IRRIGATION} element={<Irrigation />} />
            <Route path={AppRoutes.NEWS_DETAIL} element={<News />} />
            <Route
              path={AppRoutes.VET_DEPARTMENT}
              element={<VetDepartment />}
            />
            <Route path={AppRoutes.ANIMAL_PAGE} element={<AnimalPage />} />
            <Route path={AppRoutes.PASTURE} element={<PasturePage />} />
            <Route
              path={AppRoutes.PASTURE_PAYMENT}
              element={<PasturePayment />}
            />
            <Route
              path={AppRoutes.VILAGE_HISTORY}
              element={<VilageHistory />}
            />
            <Route path={AppRoutes.CONTACTS} element={<Contacts />} />
            <Route path={AppRoutes.EMPLOYEES} element={<Employees />} />
            <Route path={AppRoutes.VACANCIES} element={<Vacancies />} />
          </Route>
          <Route path={AppRoutes.ADMIN} element={<Admin />}>
            <Route index element={<IrrigationAdmin />} />
            <Route
              path={AppRoutes.IRRIGATIONS_LIST}
              element={<IrrigationsList />}
            />
            <Route
              path={AppRoutes.IRRIGATIONS_REQUESTS}
              element={<IrrigationsRequests />}
            />
            <Route path={AppRoutes.USERS} element={<Users />} />
            <Route path={AppRoutes.REGIONS} element={<Regions />} />
            <Route path={AppRoutes.PAYMENTS} element={<Payments />} />
            <Route path={AppRoutes.PASTURE_ADMIN} element={<Pasture />} />
            <Route
              path={AppRoutes.PASTURE_LIST_ADMIN}
              element={<PastureList />}
            />
            <Route
              path={AppRoutes.PASTURE_CONFIRM_ADMIN}
              element={<PastureConfirm />}
            />
          </Route>
          <Route path='*' element={<h1 className='container'>404</h1>} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
