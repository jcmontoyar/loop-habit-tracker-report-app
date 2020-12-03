import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";
import RatingCard from "../RatingCard/RatingCard";

//Imgs
import Picture1 from "./Picture1.png";
import For from "./For.jpg";
import Hash from "./hash.png";
import Lupa from "./lupa.png";
import Layout from "./Layout.jpg";
import GPU from "./gpu.jpg";
import Dark1 from "./dark1.jpg";
import Dark2 from "./dark2.jpg";
import Light from "./light1.jpg";
import PerformanceIssue from "./performance.png";
import Size from "./size.jpg";
import MicroImg from "./Micro.png";

const items = [
  "Unnecesary objects",
  "Wrappers",
  "Loops",
  "Data Structures",
  "Find by Id",
  "Layouts",
  "Linter",
  "Overdrawing",
  "APK and bundle size",
  "Unused resources",
];

const contenido = [
  {
    name: items[0],
    contenido: [
      {
        text:
          "After going through the main classes of the code we found 0 Kotlin or Java warnings of variables not being used, and also after analyzing the loops used on the code, there is no sign of auxiliary variables being created inside of the loops. There was also no warning on the linter analysis regarding this type of micro optimization.",
        image: Picture1,
        alt: "Image of an unnecesary item",
        h: "540px",
        w: "300px",
        titulo: "Creating unnecessary objects on Code and on drawing Views.",
      },
    ],
  },
  {
    name: items[1],
    contenido: [
      {
        text:
          "	In this point the app could see some improvement since it is overusing the class Integer instead using primitive int. We found over 34 classes that use Integer object for handling attributes that could be easily replaced with int.   The same goes for Long which includes over 40 classes where the object Long is used instead of primitive long.",
        image: Picture1,
        alt: "Image of a primitive being",
        h: "540px",
        w: "300px",
        titulo: "Using primitive types over wrappers",
      },
    ],
  },
  {
    name: items[2],
    contenido: [
      {
        text:
          "Even though they use primarily indexed loops, they are overusing the for each method in some classes. In some other few cases they are using iterator of keys and values that could also be replaced with indexed loops in order to improve performance.",
        image: For,
        alt: "Image of the loops using for each or iterator",
        h: "800px",
        w: "140px",
        titulo: "Indexed loops instead of iterators or for each’s",
      },
    ],
  },
  {
    name: items[3],
    contenido: [
      {
        text:
          "As we explained on the caching section of the report, Habit tracker uses for the most part Linked Lists. Since this is a non-memory efficient data structure, we would recommend replacing all Linked lists with ArrayMaps. This data structure would improve the memory usage without compromising the response speed time that Linked lists provide currently to the app.",
        image: Hash,
        alt: "Image of an Array Map",
        h: "500px",
        w: "210px",
        titulo: "Memory friendly data structures",
      },
    ],
  },
  {
    name: items[4],
    contenido: [
      {
        text:
          "This android method is only used 13 times (on 7 different activities) in the whole android Habit tracker project, for that reason it would not be recommended to make code changes to move to a binding pattern (it would not be worth it since it has very low usage).",
        image: Lupa,
        alt: "Image of android icon",
        h: "300px",
        w: "210px",
        titulo: "Avoiding the use of the find by id method in Android",
      },
    ],
  },
  {
    name: items[5],
    contenido: [
      {
        text:
          "We found 7 different layouts with nested linear layouts, you can check the list at the right image. In order to make the application more optimal Habit tracker would need to replace those layouts using constrained or relative ones.",
        image: Layout,
        alt: "Image of an Android layout",
        h: "400px",
        w: "210px",
        titulo:
          "Using relative or constraint layouts instead of nested linear layouts",
      },
    ],
  },
  {
    name: items[6],
    contenido: [
      {
        text:
          "	After running the default linter analysis using android studio, we found 201 errors and 312 warnings. Speaking of the ones related to performance, 2 of them have a 6/10 priority score and the rest are scored with a 3 or a 1. Even though it seems there is not a significant warning, there are 99 warnings that together could translate into potential performance bugs.",
        image: MicroImg,
        alt: "Image of the linter analysis",
        h: "700px",
        w: "1000px",
        titulo: "Lint Report",
      },
    ],
  },
  {
    name: items[7],
    contenido: [
      {
        text:
          "As shown in the linter analysis, there are two overdraw warnings. This can be found on the about.xml and the show_habt_inner.xml. We decided to run the app while using the android’s GPU overdraw in order to check if the linter had missed some other overdrawn areas in the application. To the right to can check the specific color meanings from the Android’s GPU overdraw utility.",
        image: GPU,
        alt: "Image with leyends of the Android’s GPU overdraw utility",
        h: "300px",
        w: "250px",
        titulo: "Avoid overdrawing",
      },
      {
        text: "About and settings activities using dark theme",
        image: Dark1,
        alt:
          "Image of about and setting activities using dark theme with GPU overdraw utility enabled",
        h: "500px",
        w: "610px",
        titulo: "Dark Theme",
      },
      {
        text: "Habits list and habit detail activities using dark theme",
        image: Dark2,
        alt:
          "Image of Habits list and habit detail activities using dark theme with GPU overdraw utility enabled",
        h: "500px",
        w: "610px",
        titulo: "Dark Theme part 2",
      },
      {
        text: "Habits list and habit detail activities using light theme",
        image: Light,
        alt:
          "Image of Habits list and habit detail activities using light theme with GPU overdraw utility enabled",
        h: "500px",
        w: "610px",
        titulo: "Light Theme",
      },
      {
        text:
          "Running the application with the GPU overdraw tool activated clearly shows that the app is overdrawing a lot, this could be causing performance issues or simply making the performance worse than it could be. This is more significant using dark mode, where the overdraw happens up to 4 times or more in the detail habit activity and in the list of habits.",
        image: PerformanceIssue,
        alt: "Bad performance icon",
        h: "500px",
        w: "210px",
        titulo: "Overview",
      },
    ],
  },
  {
    name: items[8],
    contenido: [
      {
        text:
          "Habit tracker has a very small APK size, weighing roughly 3.4 MB. Also you can see that they have made a big effort in reducing bundle size as you can check that they have built their own pickers (time, color, calendar, etc.) instead of relying on third party packages. Also after installing and running the google’s app size analyser plug in, the results show the most optimal output, showing 0 recommendations in order to reduce the app’s size",
        image: Size,
        alt: "Image of the result of the android size analyser plug in",
        h: "800px",
        w: "110px",
        titulo: "Reducing APK and bundle size",
      },
    ],
  },
  {
    name: items[9],
    contenido: [
      {
        text:
          "As shown in the Linter analysis, there are 70 unused resources in the whole application. These are 70 small fix changes that could be easily done, and while doing so you would be improving the performance, as well as the memory usage of the application.",
        image: Picture1,
        alt: "Image of a linter cleaning code",
        h: "540px",
        w: "300px",
        titulo: "Removing unused resources",
      },
    ],
  },
];

export default function Micro() {
  const [curNav, setCurNav] = useState(items[0]);
  const handleChange = (newNav) => {
    setCurNav(newNav);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Micro - optimizations</h1>
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
              Overall habit tracker has many places where it could do more in
              order to optimize its product, especially fixing overdrawing,
              removing some unused resources, using primitive types over objects
              and replacing nested linear layouts with constrained or relative
              ones. But in the other hand, the app makes a great work in its APK
              and bundle size, usage of weak references in multithreading, use
              of static in nested classes, good practices in lifecycle methods
              and very limited usage of the find view by id method.
            </p>
          </div>
          <div className="col col-12 col-md-6 my-auto">
            <RatingCard title="Micro - optimizations score" score={2.5}></RatingCard>
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
