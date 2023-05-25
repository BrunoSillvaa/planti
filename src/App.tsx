import { Container, GlobalStyles } from './AppStyles'

import Main from './components/main'
import Sidebar from './components/sidebar'

function App() {

  return (
    <>
      <Container>
        <Sidebar />
        <Main />
      </Container>

      <GlobalStyles />
    </>
  )
}

export default App
