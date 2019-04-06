import React, { Component } from "react";
import { Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginFormContainer from "./containers/LoginFormContainer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginFormContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
