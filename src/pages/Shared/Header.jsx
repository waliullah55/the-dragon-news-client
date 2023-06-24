import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Danger</Button>{" "}
        <Marquee className="text-danger" direction="left" speed={100}>
          I can be a React component, multiple React components, or just some
          text.......   
          I can be a React component, multiple React components, or just some 
        </Marquee>
      </div>


      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" className="bg-body-tertiary my-2">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Secondary</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </Container>
  );
};

export default Header;
