import { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import { Router } from './routes'

export function App() {

  return (
    <Suspense fallback={<h2>Loding...</h2>}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Suspense>
  )
}
