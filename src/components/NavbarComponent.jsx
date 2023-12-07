import { Navbar, Container, Nav, Button} from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="navbar fixed-top">
            <Container>
                <Navbar.Brand href="/">
                    <img src="/src/assets/logo.png" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link className='navlink mx-2' href="#home">Home</Nav.Link>
                    <Nav.Link className='navlink mx-2' href="#doctors">Doctors</Nav.Link>
                    <Nav.Link className='navlink mx-2' href="#facilities">Facilities</Nav.Link>
                    <Nav.Link className='navlink mx-2' href="#gallery">Gallery</Nav.Link>
                </Nav>
                <div className='d-flex btnwrapper'>
                    <Button className='w-100 me-2 primary-button'>Login</Button>
                    <Button className='w-100 secondary-button'>Register</Button>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent