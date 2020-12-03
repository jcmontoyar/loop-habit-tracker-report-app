import "./App.css";
import React from "react";
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

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavBar />
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
          </main>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
