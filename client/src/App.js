import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import "../src/App.css";
import Home from "./components/Home";

import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () => {
  return (
    <>
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup />
      </Route>
    </>
  );
};

export default App;
