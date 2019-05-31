import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginFormContainer from "./containers/LoginFormContainer";
import EditProfileContainer from "./containers/EditProfileContainer";
import HomePage from "./components/HomePage/HomePage";
import AddOfferContainer from "./containers/AddOfferContainer";
import ShowOfferContainer from "./containers/ShowOfferContainer";
import NavbarContainer from "./containers/NavbarContainer";
import SearchPageContainer from "./containers/SearchPageContainer";
import Footer from "./components/Footer/Footer";

class Routes extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        <NavbarContainer />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginFormContainer} />
            <Route
              path="/edit-profile"
              component={isLoggedIn ? EditProfileContainer : HomePage}
            />
            <Route
              path="/add-offer"
              component={isLoggedIn ? AddOfferContainer : LoginFormContainer}
            />
            <Route path="/offer" component={ShowOfferContainer} />
            <Route path="/search" component={SearchPageContainer} />
          </Switch>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    );
  }
}

export default Routes;
