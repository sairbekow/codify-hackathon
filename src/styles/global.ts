import { createGlobalStyle } from 'styled-components'
import { ITheme } from './theme'

const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    color: ${(props) => props.theme.colors.textColor};
    background-color: ${(props) => props.theme.colors.white};
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  input, textarea {
    font: inherit;
    color: inherit;
    background-color: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.titleColor}
  }

  button {
    cursor: pointer;
    font: inherit;
    border: 0;
  }
`

export default GlobalStyles
