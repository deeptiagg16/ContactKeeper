import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import ContactState from "./context/contact/ContactState";

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
