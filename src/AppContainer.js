import React, { Component } from "react";
import { connect } from "react-redux";
import App from "./App";

class AppContainer extends Component {
  render() {
    return (
      <App history={this.props.history} isLoggedIn={this.props.isLoggedIn} />
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(AppContainer);
