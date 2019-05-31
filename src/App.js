import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Routes isLoggedIn={this.props.isLoggedIn} />
      </ConnectedRouter>
    );
  }
}

export default App;
