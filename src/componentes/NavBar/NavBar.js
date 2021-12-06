import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import  Nav from "react-bootstrap/Nav"
import  NavDropdown from "react-bootstrap/NavDropdown"
import Logo from "../imagenes/mitienda.png"
import  "./NavBar.css"
import CartWidget from "./CartWidget"


export const NavBar = () => {
  return (
    <>
                <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img width="70px" height="auto" className="img-responsive" src={Logo}  alt="logo"></img> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Chocolates</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Mis Compras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Carrito</NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget></CartWidget>

                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    </>
  );
};
