import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { BASE_URL, API_FB_ID, API_GOOGLE_ID } from "../constants";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class LoginFormContainer extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    token: "",
    roleName: "",
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
      picture: response.picture.data.url,
      token: response.accessToken,
      externalProviderName: 'Facebook',
      roleName: 'Normal'
    });

    this.addNewUser();
    console.log(response.accessToken);
  };

  responseGoogle = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      token: response.accessToken,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      birthday: response.birthday,
      picture: response.profileObj.imageUrl,
      externalProviderName: 'Google',
      roleName: 'Normal'

    });
    this.addNewUser();
  };

  addNewUser = () => {
    axios.post(`${BASE_URL}/login`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        photoUrl: this.state.picture,
        externalProviderToken: this.state.token,
        externalProviderName: this.state.externalProviderName,
        roleName: this.state.roleName

      })
      .then((response) => {
        console.log(response);
        if(response.status === 200)
          this.props.history.push("/");
        else if(response.status === 201)
          this.props.history.push("/editprofile");
        else
          console.log("Something went wrong...");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { isLoggedIn } = this.state;
    const profileContent = isLoggedIn ? (
      <div>
      <Redirect to={{
        pathname: '/'
      }} />
    </div>
    ) : (
      <React.Fragment>
        <FacebookLogin
          appId={API_FB_ID}
          autoLoad={true}
          fields="first_name,last_name,email,picture"
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
