import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";
import Card from "../Card/Card";

//Imgs
import Firebase from "./firebase.png";
import Mongo from "./mongodb.png";
import Stitch from "./stitch.png";

import NewStructure from "./newStructure.png";

import DAO from "./dao.webp";

import OldLogic from "./oldLogic.png";
import NewLogic from "./newlogic.png";

const items = [
  "1. Firebase",
  "2. Mongo DB",
  "3. Structural changes",
  "4. Logic",
];

const contenido = [
  {
    name: items[0],
    contenido: [
      {
        text: "The first step would be to integrate the app with Firebase, which is as easy as following the instructions given on the website (Adding the dependencies to the project and app gradle, and adding the json given by Firebase being the most important steps). When this task is done, we can access very powerful tools, such as user authentication, which is very straight forward to implement following the guides on the website.",
        image: Firebase,
        alt: "Firebase",
        h: "540px",
        w: "300px",
        titulo: "Integrating the existing Habit tracker with Firebase",
      }
    ],
  },
  {
    name: items[1],
    contenido: [
      {
        text: "Here we are going to store only the data that is significant to the core of the application (The habits) so there is no need of too many entity relationships. A NoSQL document database works perfectly here since we do not need complex transactions. ",
        image: Mongo,
        alt: "Mongo db cluster image",
        h: "500px",
        w: "300px",
        titulo: "Creating a Mongo DB Atlas cluster",
      },
      {
        text: "To create the connection between the app and mongo DB we need to create a stitch application using the previously created cluster.",
        image: Stitch,
        alt: "Mongo db Stich app image",
        h: "500px",
        w: "300px",
        titulo: "Create a Mongo DB Stitch app with the cluster",
      }
    ],
  },
  {
    name: items[2],
    contenido: [
      {
        text: "In order to not change drastically the current folder structure and design patterns they have stablished; we would need to make additions to the database folder (which currently only supports SQLite). In this case the DAO pattern would work perfectly since we only need to create a class that handles the access to the database and performs queries to it.",
        image: NewStructure,
        alt: "Mongo db cluster image",
        h: "600px",
        w: "400px",
        titulo: "Create the classes needed to connect to the DB",
      },
      {
        text: "A DAO (data access object) is a software design pattern, whose objective is to provide the implementation needed to connect to a data base service and perform queries to it.",
        image: DAO,
        alt: "DAO design pattern image",
        h: "500px",
        w: "300px",
        titulo: "DAO",
      }
    ],
  },
  {
    name: items[3],
    contenido: [
      {
        text: "Now that we can connect to the database, we need to make the app aware of the internet status when creating, removing or editing a habit: For example, for editing a habit/ adding, we have the following code:",
        image: OldLogic,
        alt: "Old logic",
        h: "559px",
        w: "297px",
        titulo: "Set up eventual connectivity logic",
      },
      {
        text: "Now the function has connectivity awareness and the correct persistence of the habits to a cloud DB using the previously created DAO. Finally in order to make the application run those pending transactions we would use the current behavior of the application: Each time that the applications is opened, the list of habits gets iterated in order to be placed on the view, and now with the given current status of each habit and the connection status, we would make the necessary transactions to the mongo DB cluster when possible",
        image: NewLogic,
        alt: "New logic",
        h: "600px",
        w: "500px",
        titulo: "New logic",
      }
    ],
  },
];

export default function EventualCon() {
  const [curNav, setCurNav] = useState(items[0]);
  const handleChange = (newNav) => {
    setCurNav(newNav);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Eventual Connectivity</h1>
        <h2 className="alignTextCenter">For this section, since Loop habit tracker has very limited functionalities that rely on internet connection, we have prepared our own cloud solution proposal for this app.
        </h2>
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
        <h3 className="alignTextCenter">Even though currently Loop Habit tracker works perfectly with out or with internet, the app could improve easily, integrating what they already have with a cloud data base, with out affecting their current functionalities and accessing to global data analysis of the user’s habits and cloud support to their clients (which the lack of it seems to be a recurring pain point on the app’s reviews). </h3>
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
