import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <Container className="mt-4 pt-4">
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






    </Container>
  );
};

export default Header;
