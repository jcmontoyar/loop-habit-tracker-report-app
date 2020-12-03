import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";

//Imgs
import Intent from "./intent.png";
import AndroidSec from "./androidsec.png";
import Log from "./log.png";
import Settings from "./settings.png";
import Manifest from "./manifest.jpg";
import DataLeak from "./leak.jpg";

const items = ["Intents", "Data", "Exported components"];

const contenido = [
  {
    name: items[0],
    contenido: [
      {
        text:
          "Habit tracker has one class than handles all the intents of the application (IntentFactory.kt). Even though most of them are explicit within the same application, there are 6 different implicit intents that mostly redirect to webpages with different information helpers of the app (FAQ, github repository, email, playstore, etc). These do not represent a direct security tread, however the user might without knowing decide to open the web page or email with an untrusted application, and therefore creating a possible security issue.",
        image: Intent,
        alt: "Image of an Android intent",
        h: "500px",
        w: "300px",
        titulo: "Implicit intents",
      },
    ],
  },
  {
    name: items[1],
    contenido: [
      {
        text:
          "Each habit and its related data are stored in the local SQLite database on the phone’s local storage. On a first analysis this would mean that this data is safe, however since Android still has a long way to go in order to make local storage fully secured, it’s possible for another malicious app to force its way to the SQLite database and get those habits data from the user. This could be fixed using SQLCipher or using the SQLite version that secures the data (however this would need payment which probably would harm the current business model that Loop habit tracker has). ",
        image: AndroidSec,
        alt: "Image of android security",
        h: "500px",
        w: "300px",
        titulo: "Data issues",
      },
      {
        text:
          "Regarding the logs, the app has 60 of them throughout the whole project, however its purpose is mostly for performance profiling, debugging, checking the status of systems, etc.  So, there is not any sensitive data getting leaked through there.",
        image: Log,
        alt: "Image of a log",
        h: "300px",
        w: "300px",
        titulo: "Logs",
      },
      {
        text:
          "Even though the shared preferences are not encrypted using the EncryptedSharedPreferences class, we do not consider this to be a security issue, since the data stored using this type of local storage are related to very basic settings that do not represent anything sensible or private.",
        image: Settings,
        alt: "Image of  the settings icon",
        h: "300px",
        w: "300px",
        titulo: "Shared preferences",
      },
    ],
  },
  {
    name: items[2],
    contenido: [
      {
        text:
          "In the app’s manifest can be found 9 activities, 8 receivers and 1 provider. Only 2 activities and 1 receiver have the android exported attribute set as true, mainly to manage notifications, email, and widget related functionalities. Following good practices, the provider has explicitly set the same attribute to false, however the rest of activities and receivers could improve security practices by setting the attribute as false as well (It is not explicit).",
        image: Manifest,
        alt: "Image of a manifest",
        h: "500px",
        w: "300px",
        titulo: "Logs",
      },
      {
        text:
          "One of the activities that can be exported, is the one that handles the list of habits, so the data issues that were spoken about in the data sub-section, get much more problematic and impose a significant issue to the user’s data (Even though there is no personal information such as name, age, etc;  Your habits could be accessed from a third party that could sell or use that data without the user finding out).",
        image: DataLeak,
        alt: "Leak",
        h: "400px",
        w: "500px",
        titulo: "Security issue regarding the data",
      },
    ],
  },
];

export default function Security() {
  const [curNav, setCurNav] = useState(items[0]);
  const handleChange = (newNav) => {
    setCurNav(newNav);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Security</h1>
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
      <hr />
      <h2 className="title text-center  ">Overview</h2>
      <div className="container">
        <h3 className="alignTextCenter">
          Even though Loop habit tracker tries to follows good security
          practices, it is not extent of security threads, specially looking at
          the habits data, which not only suffers from the common Android’s
          local storage security issues, but also since the activities that
          handle that data are exported, it makes it much easier for malicious
          apps to access that data with out the user ever finding out.
        </h3>
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
