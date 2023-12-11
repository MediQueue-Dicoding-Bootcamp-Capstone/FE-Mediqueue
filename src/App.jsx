import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import AppointmentPage from './pages/AppointmentPage'

function App() {
  const pathname = window.location.pathname
  console.log (pathname)
  return (
    <div>
    {/* pathname =='/bookappointment' ? <NavbarComponent/> : null */}
    <NavbarComponent/>
    <Routes>
    <Route path='/' Component={LandingPage}></Route>
    <Route path='/bookappointment' Component={AppointmentPage}></Route>
    </Routes>
    <FooterComponent></FooterComponent>
    {/* pathname =='/bookappointment' ? <FooterComponent/> : null */}
    </div>
  )
}

export default App
