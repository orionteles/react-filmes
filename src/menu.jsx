import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="/">Projeto de Filmes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Filmes</Nav.Link>
          <Nav.Link href="/">Seriados</Nav.Link>
          <Nav.Link href="/alunos">Alunos</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
