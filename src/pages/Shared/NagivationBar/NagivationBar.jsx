import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";

const NagivationBar = () => {
    const {user} = useContext(AuthContext)
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        data-bs-theme="light"
        className="bg-body-tertiary my-2"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link to="/category/0">Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && 
                  <FaUserCircle style={{ fontSize: "35px" }}></FaUserCircle>
              }
                {user ? (
                  <Button variant="secondary">Log Out</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NagivationBar;
