import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "../Navigation/Nav";
import Home from "../Home/Home";
import "./App.css";

function App() {
  return <div><Router>
    <Nav></Nav>

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>

  </Router>
  <header></header>
  </div>
}

export default App;
