import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "./logo.png";

  const items = [
    "Performance",
    "Eventual connectivity",
    "Caching",
    "Multi-Threading",
    "Memory management",
    "Micro-optimizations",
    "Security",
    "Overview"
  ];

export default function NavBarTop({setActiveItem, activeItem}) {

  //Get current link
  let currLink = window.location.href.split("/");
  currLink = currLink[currLink.length - 1];

  const handleChange = (change) => {
    setActiveItem(change);
  }; 

  // Is home active ?
  let active = "" === currLink ? "selected" : "";

  return (
    <header className="App-header">
      <Navbar expand="xl" sticky="top" variant="dark" className="colorHeader">
        <Navbar.Brand>
          <Link to="/" onClick={() => handleChange("home")} className={active}>
            <Image
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top imagencita"
              alt="React Bootstrap logo"
              roundedCircle
            />
            Loop Habit Tracker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navBar"></Nav>
          <Nav className="navBar">
            {items.map((item) => navItem(item, activeItem, handleChange))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

function navItem(nombreItem, activeItem, handleChange) {
  let active = nombreItem === activeItem ? "selected" : "";
  return (
    <Link
      to={"/" + nombreItem}
      className={"aNav " + active}
      onClick={() => handleChange(nombreItem)}
      key={"nav" + nombreItem}
    >
      <Nav.Item>{nombreItem}</Nav.Item>
    </Link>
  );
}
