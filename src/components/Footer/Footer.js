import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Image from 'react-bootstrap/Image'
import logo from "../NavBar/logo.png";
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <Navbar expand="lg"  variant="dark" className="colorHeader">
        <Navbar.Brand href="/home">
          <Image
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top imagencita"
            alt="React Bootstrap logo"
            roundedCircle
          />
          Loop Habit Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav-footer" />
        <Navbar.Collapse id="basic-navbar-nav-footer">
          <Nav className="mr-auto navBar"></Nav>
          <Nav className="navBar">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </footer>
  );
}
