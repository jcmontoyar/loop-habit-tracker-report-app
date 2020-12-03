import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";
import RatingCard from "../RatingCard/RatingCard"

//Imgs
import SQL from "./SQLite.svg.png";
import Prefs from "./prefs.jpg";
import Offline from "./offline.png";

import AtLaunch from "./rocket.png";

import LinkedList from "./linkedlist.png";

const items = [
  "Local Storage",
  "Shared preferences",
  "Caching retrieving",
  "Data fetching",
  "Data Caching Structures"
];

const contenido = [
  {
    name: items[0],
    contenido: [
      {
        text: "They store both habits and checks (days where the user completed a habit) using SQLlite. All of this is located on a package named database and it uses a class called HabitFactoy that uses the factory pattern in order to create or edit patterns (as java objects) that then are transformed into a object that SQLite understands.",
        image: SQL,
        alt: "SQLite icon",
        h: "540px",
        w: "300px",
        titulo: "SQLite"
      }
    ],
  },
  {
    name: items[1],
    contenido: [
      {
        text: "Loop habit tracker has quite a lot of different settings that the users can adjust. All of those are stored using Shared preferences on a package with the same name. Here you can check all the different settings they currently have.",
        image: Prefs,
        alt: "Image of the settings you can set up in the app",
        h: "300px",
        w: "700px",
        titulo: "Shared preferences",
      }
    ],
  },
  {
    name: items[2],
    contenido: [
      {
        text: "The application uses an always offline strategy for the most part, where access to the internet is mostly optional and sometimes not even called upon using the main functionalities. More specifically the application uses Cache, falling back to network.",
        image: Offline,
        alt: "Image of an offline device",
        h: "400px",
        w: "300px",
        titulo: "Caching strategies",
      }
    ],
  },
  {
    name: items[3],
    contenido: [
      {
        text: "The app never truly fetches the data from any backend service since it works mostly offline. Regarding the proposal we made on the eventual connectivity chapter, if we were to implement that, then we would suggest a “at launch time in background” strategy in order to update the cached data.",
        image: AtLaunch,
        alt: "An image of a rocket launching",
        h: "400px",
        w: "400px",
        titulo: "Fetching strategies",
      }
    ],
  },
  {
    name: items[4],
    contenido: [
      {
        text: "The developers decided to use a linked list (using Kotlin) in order to manage the habits (which is the most important data entity). On the micro optimizations section, we will go ever a possible better data structure that could be used in order to improve memory usage.",
        image: LinkedList,
        alt: "Image of the code where the data chaching structures are",
        h: "500px",
        w: "210px",
        titulo: "Linked Lists",
      }
    ],
  },
];

export default function Caching() {
  const [curNav, setCurNav] = useState(items[0]);
  const handleChange = (newNav) => {
    setCurNav(newNav);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Caching</h1>
        <Navbar expand="lg" className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav-subContent" />
          <Navbar.Collapse id="basic-navbar-nav-subContent">
            <Nav className="mx-auto">
              {items.map((item) => (
                <Nav.Link
                  onClick={() => handleChange(item)}
                  className={curNav === item ? "activeSubNav" : " navContent"}
                  key={"subnav" + item}
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <hr className="mt-0 mb-0 hrNav" />
      <div className="contenidosSub">
        {contenido.map((contenido) =>
          buildProfilerSetting(contenido.name, curNav, contenido.contenido)
        )}
      </div>
      <hr/>
      <h2 className="title text-center  ">Overview</h2>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-6 colorBorderRight my-auto">
            <p className="alignTextCenter">
            Loop habit tracker uses mostly SQLite and Shared preferences in order to store the habit's data using an always offline caching strategy with help of Linked Lists.
            </p>
          </div>
          <div className="col col-12 col-md-6 my-auto">
            <RatingCard title="Caching score" score={4.5}></RatingCard>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

function buildProfilerSetting(name, curNav, contenido) {
  let style = name === curNav ? "" : "none";

  return (
    <div style={{ display: style }}>
      <Content contenidos={contenido}></Content>
    </div>
  );
}
