import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          <strong>SKE</strong> Textiles & Readymades
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="/" active>Home</Nav.Link>
            <Nav.Link href="https://sketextiles.gt.tc/products.php">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Login" id="loginDropdown">
              <NavDropdown.Item href="https://sketextiles.gt.tc/admin/login.php">Admin Login</NavDropdown.Item>
              <NavDropdown.Item href="https://sketextiles.gt.tc/host/login.php">Host Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
