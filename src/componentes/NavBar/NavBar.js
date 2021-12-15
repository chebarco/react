import Navbar from "react-bootstrap/Navbar"
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
               <Link to="/"> <Navbar.Brand><img width="70px" height="auto" className="img-responsive" src={Logo}  alt="logo"></img> </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item to="chocolateblancos">Chocolate Blanco</NavDropdown.Item>
                    <NavDropdown.Item to="chocolatesespeciales">Chocolate Especiales</NavDropdown.Item>
                    <NavDropdown.Item to="chocolateconleche">Chocolate con leche</NavDropdown.Item>
                    </NavDropdown>
                    <CartWidget></CartWidget>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
    </>
  );
};
