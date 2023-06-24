import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone";

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2 mt-2" variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login With Github
      </Button>

      <div>
        <h2 className="mb-2 mt-3">Find Us On</h2>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            FaceBook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNav;
