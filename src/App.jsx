import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import BookAppointment from './pages/BookAppointment'

function App() {
  return (
    <div>
    <NavbarComponent/>
    <Routes>
    <Route path='/' Component={LandingPage}></Route>
    <Route path='/bookappointment' Component={BookAppointment}></Route>
    </Routes>
    <FooterComponent/>
    </div>
  )
}

export default App
