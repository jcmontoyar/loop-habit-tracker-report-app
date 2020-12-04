import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";
import RatingCard from "../RatingCard/RatingCard"


//Imgs
import Picture1 from "../Performance/Start1.png";
import Export from "./export.jpg";
import Ful from "../Home/Android.svg";
import Launch from "./launch.jpg";
import Overview from "./overviewl.jpg";
import Rotate from "./rotate.jpg";
import AddHabit from "./habit.jpg";

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
          "As with the Performance section, we used Android Profiler to analyze the memory management of the app. We used, as well, the emulator of a Google Pixel 4 running Android API 26 to run the tests. We analyzed too the same five instances of the app: launch, adding and editing a habit, rotating the phone while in the main activity, mark fulfillment of a habit, showing the dashboard related to a given habit and exporting the habits to a .csv file.",
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
          "It is worth mentioning that during the launch, Android Profiler reported a memory leak. The class that has the problem is AppIntroFragment which oversees giving the welcome to the users when they first open the app. A screen shot is attached below as evidence of what we just say.",
        image: Launch,
        alt: "Image of the profiler when lauching the app",
        h: "800px",
        w: "155px",
        titulo: "Opening the app",
      },
    ],
  },
  {
    name: items[2],
    contenido: [
      {
        text:
          "We now move on to the second feature that we tested: adding and editing an app. When running the app and the profiler we observed that memory allocation during the task adding keeps constant and on the range of 42MB. 0 memory leaks where reported and the following are the objects that were using more memory when dumping the java heap.",
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
          "The third functionality that we tested is the one of rotating the phone while on the main activity. Memory allocatzion maintain constant and on the same range (42MB) while rotating the phone. However, the heap dump reported two memory leaks that are shown below. The classes reported are in charge of listing the habits added by the user in the UI. These leaks have to do with the fact that when rotating the phone and rendering the new view that is going to be displayed, the app never deallocates the memory that was given to the previous view shown. ",
        image: Rotate,
        alt: "Image profiler when rotating",
        h: "800px",
        w: "155px",
        titulo: "Rotating the phone",
      }
    ],
  },
  {
    name: items[4],
    contenido: [
      {
        text:
          "The marking of fulfillment of an habit feature test does not report any anomalies. And, as with the features that we have already analyzed, memory keeps constant and in the range of 42MB.",
        image: Ful,
        alt: "Image profiler when fulilling a habit",
        h: "300px",
        w: "300px",
        titulo: "Habit fulfillment",
      },
    ],
  },
  {
    name: items[5],
    contenido: [
      {
        text:
          "When showing the dashboard associated to an habit, Android Profiler reported the following memory leaks. We cannot explain why these classes are reported to be memory leaking since the view displayed (the dashboard of the habit) is, precisely, in charge of the class ShowHabitActivity whose elements are being referenced when the dashboard is displayed. ",
        image: Overview,
        alt: "Image of the profiler when entering the overview",
        h: "800px",
        w: "150px",
        titulo: "Habit overview dashboard",
      },
    ],
  },
  {
    name: items[6],
    contenido: [
      {
        text:
          "Finally, when testing the export .csv feature, 6 memory leaks were reported by Android Profiler. When you select the export .csv function from the settings view, the app displays another view so that you can choose if whether you prefer to send by e-mail the .csv file containing your habits or store it in Google Drive. The problem here is again that when changing to a new view, the app is not deallocating the memory that has been given to the previous view. . ",
        image: Export,
        alt: "Image of profiler when exporting the data on a csv file",
        h: "800px",
        w: "255px",
        titulo: "Exporting the data to a .csv file",
      },
    ],
  },
];

export default function Memory() {
  const [curNav, setCurNav] = useState(items[0]);
  const handleChange = (newNav) => {
    setCurNav(newNav);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Memory management</h1>
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
        <div className="row">
          <div className="col col-12 col-md-6 colorBorderRight my-auto">
            <p className="alignTextCenter">
            We can conclude from this section that the application performs very well in terms of memory management (during the whole execution memory allocation was on the 42MB range), even with the memory leaks that we found. However, these are common among the Android apps because displaying a new view usually leads to the memory leaks that we have reported. 
            </p>
          </div>
          <div className="col col-12 col-md-6 my-auto">
            <RatingCard title="Memory management score" score={4}></RatingCard>
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
    <div  key={name} sstyle={{ display: style }}>
      <Content contenidos={contenido}></Content>
    </div>
  );
}

