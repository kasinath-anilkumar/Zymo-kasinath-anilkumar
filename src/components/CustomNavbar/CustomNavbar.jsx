import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ZymoLogo from '../CustomNavbar/ZymoLogo.png';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center " style={{ width: '12rem' }}>
          <img src={ZymoLogo} className="img-fluid w-100" alt="Zymo Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center mx-auto">
            <Nav.Link className="me-3" style={{ fontSize: '1.2rem', fontWeight: '400' }} href="#home">Deals</Nav.Link>
            <Nav.Link className="me-3" style={{ fontSize: '1.2rem', fontWeight: '400' }} href="#fleets">Fleets</Nav.Link>
            <Nav.Link className="me-3" style={{ fontSize: '1.2rem', fontWeight: '400' }} href="#about">About Us</Nav.Link>
            <Nav.Link className="me-3" style={{ fontSize: '1.2rem', fontWeight: '400' }} href="#contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#faq" style={{ fontSize: '1.2rem', fontWeight: '400' }} className="me-3">FAQ's</Nav.Link>
            <Nav.Link href="#login">
              <button
                className="btn"
                style={{
                  background: "linear-gradient(to right, #58175c, #b34fdb)",
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.25rem',
                  border: 'none'
                }}
              >
                Login or Signup
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
