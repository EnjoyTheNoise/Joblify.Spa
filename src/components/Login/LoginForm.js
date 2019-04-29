import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import "./LoginButtons.css";

class LoginForm extends Component {
  render() {
    const googleButton = renderProps => {
      return (
        <button
          className="google-btn"
          onClick={() => {
            renderProps.onClick();
            loginRequest();
          }}
        >
          <div className="google-btn-icon" />
          <div className="google-btn-text">LOGIN WITH GOOGLE</div>
        </button>
      );
    };

    const facebookButton = renderProps => {
      return (
        <button
          className="facebook-btn small"
          onClick={() => {
            renderProps.onClick();
            loginRequest();
          }}
        >
          LOGIN WITH FACEBOOK
        </button>
      );
    };

    const {
      fbApi,
      googleApi,
      facebookScopes,
      loginRequest,
      handleFacebookResponse,
      handleGoogleSuccess,
      handleGoogleFailure
    } = this.props;

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
          appId={fbApi}
          fields={facebookScopes}
          callback={handleFacebookResponse}
          render={renderProps => facebookButton(renderProps)}
        />

        <GoogleLogin
          clientId={googleApi}
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          render={renderProps => googleButton(renderProps)}
        />
      </React.Fragment>
    );

    return <div>{profileContent}</div>;
  }
}

export default LoginForm;
