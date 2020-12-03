import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/nav";
import Content from "../Content/Content";
import RatingCard from "../RatingCard/RatingCard"

//Imgs
import Mult from "./milti.jpg";
import Runner from "./runner.jpg";
import Task from "./task.jpg";
import Task1 from "./task1.jpg";
import Task2 from "./task2.jpg";

const items = ["Multi - threading", "Tasks", "Task Runner"];

const contenido = [
  {
    name: items[0],
    contenido: [
      {
        text:
          "All the multithreading of the app is handled in the task package of the app.",
        image: Mult,
        alt: "Image of the package where the tasks are located",
        h: "300px",
        w: "500px",
        titulo: "Multi - threading",
      },
    ],
  },
  {
    name: items[1],
    contenido: [
      {
        text:
          "Both ExportDBTask and ImportDataTask correspond to async tasks that do not run on the main thread. The first one deals with exporting a full backup of the habits that you have added in the application. The second class is in charge of importing into the app previously saved backups of the application.",
        image: Task,
        alt: "Image of the profiler when lauching the app",
        h: "600px",
        w: "255px",
        titulo: "Async tasks",
      },
      {
        text:
          "We find that these classes represent asynchronous tasks because they extend from Async task and implement the doInBackground() and onPostExecute() methods which are typically implemented in tasks that do not run on the main thread.",
        image: Task1,
        alt: "Image of the export data task class",
        h: "700px",
        w: "455px",
        titulo: "Export DB task",
      },
      {
        text: "",
        image: Task2,
        alt: "Image of the import data task class",
        h: "700px",
        w: "455px",
        titulo: "Import data Task",
      },
    ],
  },
  {
    name: items[2],
    contenido: [
      {
        text:
          "Finally, we turn our attention to the AndroidTaskRunner class. This class is an application of the Façade pattern since it provides a unified high-level interface to both ExportDBTask and ImportDataTask. We arrived at this conclusion when reviewing the implementation of this class and noting that it implements the CustomAsyncTask class, which extends the AsyncTask class of Android, that is a wrapper of both classes already described.  Below we attach a screen shot as an evidence of what we just said.",
        image: Runner,
        alt: "Image of the runner implementation",
        h: "750px",
        w: "800px",
        titulo: "Android task runner",
      },
    ],
  },
];

export default function Multi() {
  const [curNav, setCurNav] = useState(items[0]);
  const handleChange = (newNav) => {
    setCurNav(newNav);
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center">Multi - threading</h1>
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
              We conclude this section observing that we could not find more
              evidence of multithreading when inspecting the code of the
              application. However, there are multithreading practices
              implemented where the app needs to.
            </p>
          </div>
          <div className="col col-12 col-md-6 my-auto">
            <RatingCard title="Multi - threading score" score={5}></RatingCard>
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
