import React, { Component } from "react";
import Photo from "../components/Photo/Photo.js";
import PersonalData from "../components/PersonalData/PersonalData.js";
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

  birthdayOnChange = date => {
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
  phoneOnChange = event => {
    this.setState({
      phone: event.target.value
    });
  };
  
  render() {
    const {
      userID, 
      email,
      firstName,
      lastName,
      birthday,
      photoUrl,
      phone,
      certificationsUrls,
      jobTypeDescription,
      experienceDescription,
      personDescription
    } = this.state;
    return (
      <Auxiliary className="container-fluid">
        <div className="row " style={{ marginRight: 0, marginTop: 10 }}>
          <div className="col-sm-6 col-xl-4">
            <div className="row">
              <Photo photoUrl={photoUrl} />
            </div>
          </div>

          <div className="col-sm-3 col-xl-2">
            <div className="row">
              <PersonalData
                firstName={firstName}
                firstNameHandler={this.firstNameChangeHandler}
                lastName={lastName}
                lastNameHandler={this.lastNameChangeHandler}
                email={email}
                phone={phone}
                phoneOnChange={this.phoneOnChange}
                birthday={birthday}
                birthdayOnChange={this.birthdayOnChange}
                certificationsUrl={certificationsUrls}
              />
            </div>
          </div>

          <div className="col-sm-3 col-xl-2">
            <div className="row">
              <Birthday
                birthday={birthday}
                birthdayOnChange={this.birthdayOnChange}
              />
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
