
import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap"
import './Nav.css';
const Navigation = () => {
  return (
    <Navbar   variant="dark"  className ="navigation">
  <Container>
    <Navbar.Brand href="/" className='heading'>Travel Wonders</Navbar.Brand>
    <div className="nav-right">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto components">
        <Nav.Link href="/">Destination</Nav.Link>
 
        <Nav.Link href="/">Contact us</Nav.Link>
        <NavDropdown title="Blog" id="basic-nav-dropdown" className="dropdown">
          <NavDropdown.Item href="#action/3.1">Historic Places</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Treks</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Cuktural sites</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Religious sites</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Adventure Activities</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
  )
}

export default Navigation;