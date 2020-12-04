import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Image from 'react-bootstrap/Image'
import logo from "../NavBar/logo.png";
import "./Footer.css"

export default function Footer() {
  return (
      <Navbar expand="lg" sticky="bottom"  variant="dark" className="colorHeader">
        <Navbar.Brand>
          <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top imagencita"
            alt="React Bootstrap logo"
            roundedCircle
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav-footer">
          <Nav className="mr-auto navBar"></Nav>
          <Nav className="navBar">
            <Nav.Item>Report by Julián Montoya and Juan Sebastián Numpaque</Nav.Item>
            <Nav.Item>Created with React</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
