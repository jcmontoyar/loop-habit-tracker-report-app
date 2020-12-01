import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "./logo.png";

const items = [
  "Performance",
  "Eventual connectivity",
  "Caching",
  "Multi - threading",
  "Memory management",
  "Micro - optimizations",
  "Security",
];

export default function NavBarTop({ activeItem, setActiveItem }) {
  return (
    <header className="App-header">
      <Navbar bg="light" expand="lg" sticky="top" bg="dark" variant="dark">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto navBar">
       
          </Nav>
          <Nav className="navBar">
            {items.map((item) => navItem(item, activeItem))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

function navItem(nombreItem, activeItem) {
  return (
    <Link to={"/" + nombreItem} className="aNav">
      <Nav.Item>
        <Button variant="dark">{nombreItem}</Button>
      </Nav.Item>
    </Link>
  );
}
