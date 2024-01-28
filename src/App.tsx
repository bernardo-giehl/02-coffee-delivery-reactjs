import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { ShopContextProvider } from './contexts/ShopContext'

import { GlobalStyle } from './styles/global'
import { themeDefault } from './styles/themes/default'
import { OrderContextProvider } from './contexts/OrderContext'
// import { themeDark } from './styles/themes/dark'

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <BrowserRouter>
        <ShopContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </ShopContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
