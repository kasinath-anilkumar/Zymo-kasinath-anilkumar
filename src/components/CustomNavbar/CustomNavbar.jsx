import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ZymoLogo from '../CustomNavbar/ZymoLogo.png';
import { Link,NavLink } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" sticky='top' style={{boxSizing:'border-box'}} className="shadow-sm px-24 bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center w-20 sm:w-32 md:w-48" >
          <img src={ZymoLogo}  className="img-fluid" alt="Zymo Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink className="me-5 ms-2" style={{ fontSize: '1.2rem', fontWeight: '400' }} to="/">Fleets</NavLink>
            <NavLink className="me-5" style={{ fontSize: '1.2rem', fontWeight: '400' }} to="/cars">Deals</NavLink>
            <NavLink className="me-5" style={{ fontSize: '1.2rem', fontWeight: '400' }} to="/zymo">About Us</NavLink>
            <NavLink className="me-5" style={{ fontSize: '1.2rem', fontWeight: '400' }} to="/refer">Contact Us</NavLink>
            <NavLink className="me-5" style={{ fontSize: '1.2rem', fontWeight: '400' }} to="/career">Career</NavLink>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#faq" style={{ fontSize: '1.2rem', fontWeight: '400' }} className="me-3">FAQ's</Nav.Link>
            {/* <Nav.Link href="#login">
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
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
