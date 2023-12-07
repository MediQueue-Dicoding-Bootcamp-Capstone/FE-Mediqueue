import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div>
    <NavbarComponent/>
    <Routes>
    <Route path='/' Component={LandingPage}></Route>
    </Routes>
    <FooterComponent/>
    </div>
  )
}

export default App
