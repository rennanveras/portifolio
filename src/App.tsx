import { ThemeProvider } from 'styled-components'

import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import About from './containers/about'
import EstiloGlobal, { Container } from './styles'
import ThemeLight from './themes/light'
import ThemeDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [modeDarkActived, setModeDarkActived] = useState(false)

  function changeTheme() {
    setModeDarkActived(!modeDarkActived)
  }

  return (
    <ThemeProvider theme={modeDarkActived ? ThemeDark : ThemeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
