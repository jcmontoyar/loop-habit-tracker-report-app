import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBarTop";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Performance from "./components/Performance/Performance";
import EventualCon from "./components/EventualCon/EventualCon";
import Caching from "./components/Caching/Caching";
import Multi from "./components/Multi/Multi";
import Memory from "./components/Memory/Memory";
import Microa from "./components/Micro/Micro";
import Security from "./components/Security/Security";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const items = [
  "Performance",
  "Eventual connectivity",
  "Caching",
  "Multi-Threading",
  "Memory management",
  "Micro-optimizations",
  "Security",
];

function App() {
  // Get current link and set status to home or the current component active
  let currLink = window.location.href.split("/");
  currLink = currLink[currLink.length - 1];

  // Component active status
  const [activeItem, setActiveItem] = useState(currLink);
  const handleChange = (change) => {
    setActiveItem(change);
  };

  return (
    <div className="App">
      <Router basename="/">
        <NavBar setActiveItem={setActiveItem} activeItem={activeItem}></NavBar>
        <Switch>
          <main>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Performance">
              <Performance />
            </Route>
            <Route path="/Eventual connectivity">
              <EventualCon />
            </Route>
            <Route path="/Caching">
              <Caching />
            </Route>
            <Route path="/Multi-Threading">
              <Multi />
            </Route>
            <Route path="/Memory management">
              <Memory />
            </Route>
            <Route path="/Micro-optimizations">
              <Microa />
            </Route>
            <Route path="/Security">
              <Security />
            </Route>
            {getButtons(activeItem, handleChange)}
          </main>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

function getButtons(activeItem, handleChange) {
  let prev = "";
  let next = "";

  for (let i = 0; i < items.length; i++) {
    if (items[i] === activeItem) {
      prev = i === 0 ? "" : items[i - 1];
      next = i === items.length - 1 ? "" : items[i + 1];
      break;
    }
  }

  // Case home
  if (prev === "" && next === "") {
    next = items[0];
  }
  // Case 0
  else if (prev === "" && next !== "") {
    prev = "Home";
  }

  return (
    <div className="container">
      <div className="row btnsBot">
        {prev === "" ? (
          ""
        ) : (
          <div className="col col-6 my-auto">
            <Link to={prev === "Home" ? "/" : "/" + prev}>
              <Button
                className="left"
                variant="success"
                onClick={() => handleChange(prev)}
              >
                <i class="fa fa-angle-left btnIconLeft"></i>
                {prev}
              </Button>
            </Link>
          </div>
        )}
        {next === "" ? (
          ""
        ) : (
          <div className="col col-6  my-auto">
            <Link to={"/" + next}>
              <Button
                className="right"
                variant="success"
                onClick={() => handleChange(next)}
              >
                {next}
                <i class="fa fa-angle-right btnIconRight"></i>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
