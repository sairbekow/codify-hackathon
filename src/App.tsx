import { CssBaseline } from '@mui/material'
import { makeStore } from './store/index'
import { Provider, useDispatch } from 'react-redux'
import GlobalStyles from './styles/global'
import Theme from './styles/theme'
import AppRouter from './AppRouter'
import styled from 'styled-components'
import { useEffect } from 'react'
import { getCurrentUser } from './utils/cookie'
import { setUserLoggedIn } from './store/slices/userSlice'

const store = makeStore()

const AppWrapper = styled.div`
  height: 100vh;
`

function App() {
  return (
    <AppWrapper>
      <Provider store={store}>
        <Theme>
          <>
            <CssBaseline />
            <GlobalStyles />
            <AppRouter />
          </>
        </Theme>
      </Provider>
    </AppWrapper>
  )
}

export default App
