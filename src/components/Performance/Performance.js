import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";

//Imgs
import Start1 from "./Start1.png";

import Start2 from "./Start2.png";

const introd =
  "The performance tests were performed on Android Studio using the Android Profiler tool. A Google Pixel 4 phone emulator running Android API 26 was used to run these tests.  We analyzed four instances of the app: launch, adding and editing an habit, rotating the phone while in the main activity, mark fulfillment of an habit, showing the dashboard related to a given habit and exporting the habits to a .csv file.";

const launchTime =
  "When launching the app, the first thing we observed is that it uses 25% of the CPU as we can see in the image below. After analyzing the trace recordings, we could find that there are three threads that are consuming most of the resources. These are: hwuiTask, .isoron.uhabits and RenderThread which are in charge of building the UI of the app and rendering it. However, given the low complexity of the interface of the app which we also show below, we consider that the amount of CPU used for building the UI is quite high and could lead to failures if for instance, when launching the app, the user is also running CPU consuming apps in the phone like Youtube, Skype or Whatsapp.";

const launchTime2 =
  "Following with the launch analysis of the app, we look at the memory usage. The maximum amount of memory used when launching the app was 272MB distributed as the image below show. One interesting thing to note is that graphics related task do not use any memory at all, but the UI rendering and launching are the most consuming CPU activities.";

const items = [
  "Profiler settings",
  "Energy consumption",
  "Add habit",
  "Rotating view",
  "Habit fulfillment",
  "Habit dashboard",
  "Exporting data",
];

const contenidoProfiler = [
  {
    name: items[0],
    contenido: [
      {
        text: launchTime,
        image: Start1,
        alt: "Start of app",
        orientation: "vertical",
        titulo: "Titulpo",
      },
      {
        text: launchTime2,
        image: Start2,
        alt: "First view when opening the app",
        orientation: "vertical",
        titulo: "Titulpo",
      },
    ],
  },
  {
    name: items[1],
    contenido: [
      {
        text: launchTime,
        image: Start1,
        alt: "Start of app",
        orientation: "vertical",
        titulo: "Titulpo",
      },
      {
        text: launchTime2,
        image: Start2,
        alt: "Start of app",
        orientation: "vertical",
        titulo: "Titulpo",
      },
    ],
  },
];

export default function Performance() {
  const [curNav, setCurNav] = useState(items[0]);
  const handleChange = (newNav) => {
    setCurNav(newNav);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Performance</h1>

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
        {contenidoProfiler.map((contenido) =>
          buildProfilerSetting(contenido.name, curNav, contenido.contenido)
        )}
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
