import React, { Component } from "react";
import { API_FB_ID, FACEBOOK_SCOPES, API_GOOGLE_ID } from "../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../actions/LoginActions";
import LoginForm from "../components/Login/LoginForm";

class LoginFormContainer extends Component {
  render() {
    const { isLegit, isFetching, actions } = this.props;
    return (
      <LoginForm
        isLegit={isLegit}
        isFetching={isFetching}
        facebookScopes={FACEBOOK_SCOPES}
        fbApi={API_FB_ID}
        googleApi={API_GOOGLE_ID}
        loginRequest={actions.loginRequest}
        handleFacebookResponse={actions.handleFacebookResponse}
        handleGoogleSuccess={actions.handleGoogleSuccess}
        handleGoogleFailure={actions.handleGoogleFailure}
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
