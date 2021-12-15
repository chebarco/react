import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import  Nav from "react-bootstrap/Nav"
import  NavDropdown from "react-bootstrap/NavDropdown"
import Logo from "../imagenes/mitienda.png"
import  "./NavBar.css"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"


export const NavBar = () => {
  return (
    <>
                <Navbar expand="lg">
                <Navbar.Brand href="#home"><img width="70px" height="auto" className="img-responsive" src={Logo}  alt="logo"></img> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="inicio">Inicio</Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown" className="productos">
                    <NavDropdown.Item to="/categoria/chocolateblancos">Chocolates Blancos</NavDropdown.Item>
                    <NavDropdown.Item to="/categoria/chocolateconleche">Chocolates Con leche</NavDropdown.Item>
                    <NavDropdown.Item to="/categoria/chocolatesespeciales">Chocolates Especiales</NavDropdown.Item>

                    </NavDropdown>
                    <CartWidget></CartWidget>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
    </>
  );
};
