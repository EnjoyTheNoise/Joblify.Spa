import React, { Component } from "react";
import { Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginFormContainer from "./containers/LoginFormContainer";
import HomePage from "./components/HomePage/HomePage";
import NavbarUnlogged from "./components/Navbar/NavbarUnlogged";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarUnlogged />
          <div className="content">
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
