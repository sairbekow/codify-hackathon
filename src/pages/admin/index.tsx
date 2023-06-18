import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Link, Outlet } from 'react-router-dom'

import Drawer from './adminSidePanel'
import AppBar from './adminNavBar'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { AppRoutes } from '../../data/consts'

const defaultTheme = createTheme()

export default function Admin() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute'>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}>
              Админ панель
            </Typography>
            <IconButton color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent'>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}>
          </Toolbar>
          <Divider />
          <List component='nav'>
            <Link to={AppRoutes.ADMIN}>
              <ListItemButton>
                <ListItemText primary='Irrigation' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.IRRIGATIONS_LIST_ADMIN}>
              <ListItemButton>
                <ListItemText primary='Irrigations list' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.IRRIGATIONS_REQUESTS_ADMIN}>
              <ListItemButton>
                <ListItemText primary='Irrigations requests' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.USERS}>
              <ListItemButton>
                <ListItemText primary='Users' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.REGIONS}>
              <ListItemButton>
                <ListItemText primary='Regions' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.PAYMENTS}>
              <ListItemButton>
                <ListItemText primary='Payments' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.PASTURE_ADMIN}>
              <ListItemButton>
                <ListItemText primary='Pasture' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.PASTURE_LIST_ADMIN}>
              <ListItemButton>
                <ListItemText primary='Pasture list' />
              </ListItemButton>
            </Link>
            <Link to={AppRoutes.PASTURE_CONFIRM_ADMIN}>
              <ListItemButton>
                <ListItemText primary='Pasture confirm' />
              </ListItemButton>
            </Link>
          </List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}>
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Outlet />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
