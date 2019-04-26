import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  render() {
    const profileContent = this.props.isLegit ? (
      <div>
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      </div>
    ) : (
      <React.Fragment>
        <FacebookLogin
          appId={this.props.fbApi}
          fields={this.props.facebookScopes}
          onClick={this.props.loginRequested}
          callback={this.props.handleFacebookResponse}
        />

        <GoogleLogin
          clientId={this.props.googleApi}
          buttonText="LOGIN WITH GOOGLE"
          onClick={this.props.loginRequested}
          onSuccess={this.props.handleGoogleSuccess}
          onFailure={this.props.handleGoogleFailure}
        />
      </React.Fragment>
    );

    return <div>{profileContent}</div>;
  }
}

export default LoginForm;
