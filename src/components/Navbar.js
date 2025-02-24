import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Bhakti Marg 2024
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/speakers">
              Speakers
            </Nav.Link>
            <Nav.Link as={NavLink} to="/schedule">
              Schedule
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sponsors">
              Sponsors
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
