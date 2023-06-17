import { ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'

interface IThemeProps {
  children: ReactElement
}

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    primary: '#2F5AA8',
    textColor: '#535578',
    titleColor: '#0b2038',
    bgColor: '#fafbfd',
    error: '#d93025',
  },
  fonts: ['sans-serif', 'Poppins', 'Inter'],
}

export type ITheme = typeof theme

const Theme = ({ children }: IThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
