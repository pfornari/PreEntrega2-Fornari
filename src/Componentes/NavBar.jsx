import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Widget from '../Widget/Widget'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">ShopCart</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Productos</Nav.Link>
                <Nav.Link href="#pricing">Precios</Nav.Link>
                <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">A</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">B</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">C</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Otras</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link eventKey={2} href="carrito">
                    <Widget />
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar