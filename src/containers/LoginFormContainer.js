import React, { Component } from "react";
import { API_FB_ID, FACEBOOK_SCOPES, API_GOOGLE_ID } from "../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../actions/LoginActions";
import LoginForm from "../components/Login/LoginForm";

class LoginFormContainer extends Component {
  loginRequest = () => {
    this.props.actions.loginRequest();
  };

  handleFacebookResponse = response => {
    this.props.actions.handleFacebookResponse(response);
  };

  handleGoogleFailure = response => {
    this.props.actions.handleGoogleFailure(response);
  };

  handleGoogleSuccess = response => {
    this.props.actions.handleGoogleSuccess(response);
  };

  render() {
    return (
      <LoginForm
        isLegit={this.props.isLegit}
        isFetching={this.props.isFetching}
        facebookScopes={FACEBOOK_SCOPES}
        fbApi={API_FB_ID}
        googleApi={API_GOOGLE_ID}
        loginRequest={this.loginRequest}
        handleFacebookResponse={this.handleFacebookResponse}
        handleGoogleSuccess={this.handleGoogleSuccess}
        handleGoogleFailure={this.handleGoogleFailure}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.facebookLogin.isFetching || state.googleLogin.isFetching,
  isLegit: state.facebookLogin.isLegit || state.googleLogin.isLegit,
  facebookError: state.facebookLogin.error,
  googleError: state.googleLogin.error
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...loginActions
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
