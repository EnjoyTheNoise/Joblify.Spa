import React, { Component } from "react";
import { API_FB_ID, FACEBOOK_SCOPES, API_GOOGLE_ID } from "../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loginRequested,
  handleGoogleSuccess,
  handleGoogleFailure,
  handleFacebookResponse
} from "../actions/LoginActions";
import LoginForm from "../components/Login/LoginForm";

class LoginFormContainer extends Component {
  loginRequested = () => {
    this.props.actions.loginRequested();
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
        loginRequested={this.loginRequested}
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
      loginRequested,
      handleGoogleSuccess,
      handleGoogleFailure,
      handleFacebookResponse
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer);
