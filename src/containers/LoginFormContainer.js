import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { BASE_URL } from "../constants";
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
    let fbCotent;

    if (this.state.isLoggedIn) {
      fbCotent = (
        <div
          style={{
            width: "700px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.firstName} />
          <h2>Witaj mordo: {this.state.firstName} </h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbCotent = (
        <FacebookLogin
          appId="355726405039496"
          autoLoad={true}
          fields="first_name,last_name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbCotent}</div>;
  }
}
