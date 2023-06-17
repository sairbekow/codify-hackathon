import React from 'react'
import { CssBaseline } from '@mui/material'
import { makeStore } from './store'
import { Provider } from 'react-redux'
import GlobalStyles from './styles/global'
import Theme from './styles/theme'
import AppRouter from './AppRouter'

const store = makeStore()

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <Theme>
          <>
            <CssBaseline />
            <GlobalStyles />
            <AppRouter />
          </>
        </Theme>
      </Provider>
    </div>
  )
}

export default App
