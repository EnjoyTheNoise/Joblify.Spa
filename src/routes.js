import React from 'react'
import { Route, Switch } from "react-router-dom";

import LoginFormContainer from "./containers/LoginFormContainer";
import EditProfileContainer from "./containers/EditProfileContainer";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

const routes = (
  <div className="App">
    <Navbar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/edit-profile" component={EditProfileContainer} />
      </Switch>
    </div>
  </div>
);

export default routes;
