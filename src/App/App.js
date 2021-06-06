import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "../Navigation/Nav";
import Home from "../Home/Home";
import Footer from "./Footer";
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
  <Footer/>
  </div>
}

export default App;
