import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginFormContainer from "./containers/LoginFormContainer";
import EditProfileContainer from "./containers/EditProfileContainer";
import HomePage from "./components/HomePage/HomePage";
import AddOfferContainer from "./containers/AddOfferContainer";
import ShowOfferContainer from "./containers/ShowOfferContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import NavbarContainer from "./containers/NavbarContainer";
import SearchPageContainer from "./containers/SearchPageContainer";
import Footer from "./components/Footer/Footer";

const routes = (
  <div className="App">
    <NavbarContainer />
    <div className="content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/edit-profile" component={EditProfileContainer} />
        <Route path="/add-offer" component={AddOfferContainer} />
        <Route path="/offer" component={ShowOfferContainer} />
        <Route path="/search" component={SearchPageContainer} />
        <Route path="/user" component={UserProfileContainer} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default routes;
