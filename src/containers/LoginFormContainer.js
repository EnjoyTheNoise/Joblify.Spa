import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { BASE_URL, API_FB_ID, API_GOOGLE_ID } from "../constants";
import { providers, roles } from "../enums.js";
import axios from "axios";
import { Redirect } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import EditProfileContainer from "./EditProfileContainer";

export default class LoginFormContainer extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    firstName: "",
    lastName: "",
    email: "",
    photoUrl: "",
    externalProviderToken: "",
    roleName: ""
  };

  componentClicked = () => console.log("clicked");

  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      firstName: response.first_name,
      lastName: response.last_name,
      email: response.email,
      photoUrl: response.picture.data.url,
      externalProviderToken: response.accessToken,
      externalProviderName: providers.FACEBOOK,
      roleName: roles.USER
    });

    this.addNewUser();
    console.log(response.accessToken);
  };

  responseGoogle = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      externalProviderToken: response.accessToken,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      birthday: response.birthday,
      photoUrl: response.profileObj.imageUrl,
      externalProviderName: providers.GOOGLE,
      roleName: roles.USER
    });
    this.addNewUser();
  };

  addNewUser = () => {
    const {
      firstName,
      lastName,
      email,
      photoUrl,
      externalProviderToken,
      externalProviderName,
      roleName
    } = this.state;
    axios
      .post(`${BASE_URL}/login`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        photoUrl: photoUrl,
        externalProviderToken: externalProviderToken,
        externalProviderName: externalProviderName,
        roleName: roleName
      })
      .then(response => {
        if (response.status === 200) this.props.history.push(HomePage);
        else if (response.status === 201)
          this.props.history.push(EditProfileContainer);
        else console.log("Something went wrong...");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { isLoggedIn } = this.state;
    const profileContent = isLoggedIn ? (
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
          appId={API_FB_ID}
          autoLoad={true}
          fields="first_name,last_name,email,photoUrl"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />

        <GoogleLogin
          clientId={API_GOOGLE_ID}
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </React.Fragment>
    );

    return <div>{profileContent}</div>;
  }
}
