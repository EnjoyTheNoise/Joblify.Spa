import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import "./LoginButtons.css";

class LoginForm extends Component {
  render() {
    const {
      fbApi,
      googleApi,
      facebookScopes,
      loginRequest,
      handleFacebookResponse,
      handleGoogleSuccess,
      handleGoogleFailure
    } = this.props;

    const googleButton = (renderProps, onClickAction) => {
      return (
        <button
          className="google-btn"
          onClick={() => {
            renderProps.onClick();
            onClickAction();
          }}
        >
          <div className="google-btn-icon" />
          <div className="google-btn-text">LOGIN WITH GOOGLE</div>
        </button>
      );
    };

    const facebookButton = (renderProps, onClickAction) => {
      return (
        <button
          className="facebook-btn small"
          onClick={() => {
            renderProps.onClick();
            onClickAction();
          }}
        >
          LOGIN WITH FACEBOOK
        </button>
      );
    };

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
          render={renderProps => facebookButton(renderProps, loginRequest)}
        />

        <GoogleLogin
          clientId={googleApi}
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          render={renderProps => googleButton(renderProps, loginRequest)}
        />
      </React.Fragment>
    );

    return <div>{profileContent}</div>;
  }
}

export default LoginForm;
