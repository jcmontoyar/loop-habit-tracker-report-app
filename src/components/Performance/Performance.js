import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";

//Imgs
import Picture1 from "./Start1.png";
import Export from "./eport.jpg";
import Ful from "./ful.jpg";
import Launch from "./launch.jpg";
import Overview from "./overview.png";
import Rotate from "./rotate1.jpg";
import RotateBug from "./rotatebug.jpg";
import AddHabit from "./habitm.jpg";

const items = [
  "Profiler",
  "Launch",
  "Habit managment",
  "Rotating view",
  "Fulfillment of habit",
  "Habit detail",
  "Exporting data",
];

const contenido = [
  {
    name: items[0],
    contenido: [
      {
        text:
          "The performance tests were performed on Android Studio using the Android Profiler tool. A Google Pixel 4 phone emulator running Android API 26 was used to run these tests.  We analyzed six instances of the app: launch, adding and editing a habit, rotating the phone while in the main activity, mark fulfillment of a habit, showing the dashboard related to a given habit and exporting the habits to a .csv file.",
        image: Picture1,
        alt: "Image of the emulator",
        h: "300px",
        w: "500px",
        titulo: "Profiler settings",
      },
    ],
  },
  {
    name: items[1],
    contenido: [
      {
        text:
          "When launching the app, the first thing we observed is that it uses 25% of the CPU as we can see in the image below. After analyzing the trace recordings, we could find that there are three threads that are consuming most of the resources. These are: hwuiTask,  .isoron.uhabits and RenderThread which are in charge of building the UI of the app and rendering it. However, given the low complexity of the interface of the app which we also show below, we consider that the amount of CPU used for building the UI is quite high and could lead to failures if for instance, when launching the app, the user is also running CPU consuming apps in the phone like Youtube, Skype or Whatsapp.",
        image: Launch,
        alt: "Image of the profiler when lauching the app",
        h: "800px",
        w: "255px",
        titulo: "Opening the app",
      },
    ],
  },
  {
    name: items[2],
    contenido: [
      {
        text:
          "The next functionality that we evaluated during the performance test was the one of adding an habit. As with the launching, we kept track of the CPU, memory and energy usage when adding two habits with distinct characteristics. Regarding to the CPU usage it reaches its maximum of 60% when one touches the add habit button for the task. When editing the habit (setting its name, associated question, reminders), processor usage keeps below 20% most of the time. It again shoots up to 50% when one intends to change the color of the habit that one is adding. When adding the second task, the app performs even better. For instance, when pressing again the button of add tasks, the CPU usage raises below 45%. The only thing worth of mentioning is that when setting the weekdays, in which the user wants to be reminded about its habit, which is done with a picker, the CPU usage raises to 50%. Energy consumption, in accordance with what we have observed, was high when the add habit button was pressed and when selecting the color for the first habit that was added. On the second task that we added, the most energy consuming activity, as expected, was when the weekday picker displays. A screenshot of the profiler records is attached, as evidence, showing the performance of the app while adding the first habit.",
        image: AddHabit,
        alt: "Image of the profiler when adding or editing a habit",
        h: "800px",
        w: "400px",
        titulo: "Adding and editing habits",
      },
    ],
  },
  {
    name: items[3],
    contenido: [
      {
        text:
          "The third feature that we wanted to report is the one of rotating the phone on the main screen so that the user can have more days information of his habits. Regarding to the CPU and energy usage while rotating the phone, the levels raised to 49% and HEAVY energy consumption respectively which we consider high for an activity that just involves rotating the phone. The following screen capture is provided as evidence of what we are reporting.",
        image: Rotate,
        alt: "Image profiler when rotating",
        h: "800px",
        w: "355px",
        titulo: "Rotating the phone",
      },
      {
        text:
          " Moreover, when testing this feature, we discover a bug in the app. The view displayed when rotating the phone is not the one that the app is supposed to show. Sadly, we could not determine the origin of this bug in the app. ",
        image: RotateBug,
        alt: "Bugged rotated view",
        h: "500px",
        w: "210px",
        titulo: "Bug on rotating the view",
      },
    ],
  },
  {
    name: items[4],
    contenido: [
      {
        text:
          "Following with the analysis of the features, we now discuss the marking the fulfillment of an habit in the main screen feature. The screen shot below shows the performance of the app when interacting with this feature of the application. Every time we tapped the screen the CPU usage raises to, on average, 30% and the energy consumption levels where on the MEDIUM range. As with the rotation feature tested, we think these levels are high for a routine operation, like touching the screen is, in a mobile app.",
        image: Ful,
        alt: "Image profiler when fulilling a habit",
        h: "800px",
        w: "355px",
        titulo: "Habit fulfillment",
      },
    ],
  },
  {
    name: items[5],
    contenido: [
      {
        text:
          "The activity related to the display of the dashboard for a given habit is the worst performing of all. CPU usage and energy consumption levels raised to almost 90% and HIGH respectively while the dashboard was displayed.   We recognize that the rendering of the dashboard might be CPU expensive, but the levels that the app showed are beyond normal taking into account that the app does not offer interaction with the dashboard at all.  At one point it was almost impossible to interact with the app since the screen just froze. After checking which was the thread that was consuming most of the resources, we find out that it was the RenderThread. Below are attached screen shots as evidence of what we have just reported.",
        image: Overview,
        alt: "Image of the profiler when entering the overview",
        h: "800px",
        w: "800px",
        titulo: "Habit overview dashboard",
      },
    ],
  },
  {
    name: items[6],
    contenido: [
      {
        text:
          "The last feature that we explored is the one that allows users to export to .csv their habits. This performs quite well. The app offers the possibility to send the .csv file generated via e-mail and we did not have any trouble during the process. It is worth mentioning, however, that when interacting with the settings view, the CPU and energy usage raised to 50% and HEAVY respectively. This maybe has to do with the rendering of the settings view of the app. Below, a screen shot is provided as evidence of what we just discussed.",
        image: Export,
        alt: "Image of profiler when exporting the data on a csv file",
        h: "800px",
        w: "355px",
        titulo: "Exporting the data to a .csv file",
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
        {contenido.map((contenido) =>
          buildProfilerSetting(contenido.name, curNav, contenido.contenido)
        )}
      </div>
      <hr />
      <h2 className="title text-center  ">Overview</h2>
      <div className="container">
        <h3 className="alignTextCenter">
          As a conclusion for this section, we might say that, overall, the app
          does not perform well. It uses a lot of resources for routine
          processes in all mobile apps like loading a new view and responding to
          the interaction of the users with buttons and elements in screen. What
          is most concerning is that the app does not even offer any feature
          that has to do with network connection. The app UI, as we already
          reported, is not complex at all, however, the rendering of the views
          was one of the most resource consuming tasks. We do not recommend to
          use this app while using other ``heavy’’ apps because it is highly
          probable that the system will crash due to the high use of the CPU.
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
