import "./App.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import React from "react";
import NavBar from "./components/NavBar/NavBarTop";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>

        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
