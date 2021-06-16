import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "../Navigation/Nav";
import Home from "../Home/Home";
import Character from "../Home/Character";
import Footer from "./Footer";
import "./App.css";

function App() {
  return <div><Router>
    <Nav></Nav>
    <div className="container">
    <Switch>
    <Route exact path="/:id">
        <Character/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
    </div>

  </Router>
  <Footer/>
  </div>
}

export default App;
