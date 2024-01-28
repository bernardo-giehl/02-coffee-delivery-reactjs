import { createGlobalStyle } from 'styled-components'

import { fonts } from './fonts'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.baseText};
    -webkit-font-smoothing: antialaised;
  }

  body, input, textarea, button, label {
    ${fonts.textM};
    transition: 0.25s;
  }
`
