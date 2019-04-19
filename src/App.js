import React, { Component } from "react";
import { Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LoginFormContainer from "./containers/LoginFormContainer";
import EditProfileContainer from "./containers/EditProfileContainer";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginFormContainer} />
              <Route path="/editprofile" component={EditProfileContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
