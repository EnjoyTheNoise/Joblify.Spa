import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { BASE_URL, API_FB_ID, API_GOOGLE_ID } from "../constants";
import axios from "axios";

export default class LoginFormContainer extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    token: ""
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
      token: response.accessToken
    });

    console.log(response.accessToken);
  };

  responseGoogle = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.profileObj.googleId,
      firstName: response.profileObj.givenName,
      lastName: response.profileObj.familyName,
      email: response.profileObj.email,
      birthday: response.birthday,
      picture: response.profileObj.imageUrl
    });
  };

  addNewUser = () => {
    axios
      .post(`${BASE_URL}/login`, {
        firstName: this.state.first_name,
        lastName: this.state.last_name,
        email: this.state.email,
        picture: this.state.picture.data.url,
        token: this.state.accessToken
      })
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    const { isLoggedIn, picture, firstName, lastName, email } = this.state;
    const profileContent = isLoggedIn ? (
      <div
        style={{
          width: "700px",
          margin: "auto",
          background: "#f4f4f4",
          padding: "20px"
        }}
      >
        <img src={picture} alt={firstName} />
        <h2>
          Witaj mordo: {firstName} {lastName}{" "}
        </h2>
        Email: {email}
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
