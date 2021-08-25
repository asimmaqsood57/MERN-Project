import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import "../src/App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "../src/components/ErrorPage";
const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
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
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
