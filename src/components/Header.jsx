import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About us
          </Link>

          <Link to="/search" className="nav-link">
            Search
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
