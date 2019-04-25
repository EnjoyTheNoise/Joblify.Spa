import React, { Component } from "react";
import Photo from "../components/Photo/Photo.js";
import PersonalData from "../components/PersonalData/PersonalData.js";
import Certifications from "../components/PersonalData/Certyfications/Certyfications.js";
import Birthday from "../components/PersonalData/Birthday/Birthday.js";
import Auxiliary from "../Auxiliary.js";
export default class EditProfileContainer extends Component {
  state = {
    userID: "",
    email: "123@123.xd",
    firstName: "jacek",
    lastName: "placek",
    birthday: new Date(),
    photoUrl:
      "https://img1.looper.com/img/gallery/the-untold-truth-of-trailer-park-boys/intro.jpg",
    phone: "123456789",
    certificationsUrls: ["", "", ""],
    jobTypeDescription: "",
    experienceDescription: "",
    personDescription: ""
  };

  birthdayHandler = date => {
    this.setState({
      birthday: date
    });
  };
  firstNameChangeHandler = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  lastNameChangeHandler = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  phoneHandler = event => {
    this.setState({
      phone: event.target.value
    });
  };
  render() {
    return (
      <Auxiliary className="container-fluid">
        <div className="row " style={{ marginRight: 0, marginTop: 10 }}>
          <div className="col-sm-6 col-xl-4">
            <div className="row">
              <Photo photoUrl={this.state.photoUrl} />
            </div>
          </div>

          <div className="col-sm-3 col-xl-2">
            <div className="row">
              <PersonalData
                firstName={this.state.firstName}
                firstNameHandler={this.firstNameChangeHandler}
                lastName={this.state.lastName}
                lastNameHandler={this.lastNameChangeHandler}
                email={this.state.email}
                phone={this.state.phone}
                phoneHandler={this.phoneHandler}
                birthday={this.state.birthday}
                birthdayHandler={this.birthdayHandler}
                certificationsUrl={this.state.certificationsUrls}
              />
            </div>
          </div>

          <div className="col-sm-3 col-xl-2">
            <div className="row">
              <Birthday
                birthday={this.state.birthday}
                birthdayHandler={this.birthdayHandler}
              />
              <Certifications />
            </div>
          </div>
        </div>
      </Auxiliary>

      /* TO DO:
              <JobTypeDescription/>
                <ExperienceDescription/>
                <PersonDescription/>
                <DeleteAccount/>
                <SaveChanges/> */
    );
  }
}
