import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "../Navigation/Nav";
import Home from "../Home/Home";
import CharacterPage from "../Home/CharacterPage";
import Footer from "./Footer";
import "./App.css";

function App() {
  return <div><Router>
    <Nav></Nav>

    <Switch>
    <div className="container">
    <Route exact path="/:id">
        <CharacterPage/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      </div>
    </Switch>

  </Router>
  <Footer/>
  </div>
}

export default App;
