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

import { Worker } from "@react-pdf-viewer/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <div className="content">
            <Route exact path="/">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                <Home />
              </Worker>
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
          </div>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
