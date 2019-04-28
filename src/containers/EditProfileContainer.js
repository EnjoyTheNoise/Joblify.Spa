import React, { Component } from "react";
import Photo from "../components/Photo/Photo.js";
import PersonalData from "../components/PersonalData/PersonalData.js";
import Birthday from "../components/PersonalData/Birthday/Birthday.js";
import JobTypeDescription from "../components/JobTypeDescription/JobTypeDescription.js";
import ExperienceDescription from "../components/ExperienceDescription/ExperienceDescription.js";
import PersonDescription from "../components/PersonDescription/PersonDescription.js";
import Auxiliary from "../Auxiliary.js";
import "./EditProfileButtonsExtensions.css";
export default class EditProfileContainer extends Component {
  state = {
    userID: "",
    email: "123@123.xd",
    firstName: "Bubbles",
    lastName: "Bubbles",
    birthday: new Date(),
    photoUrl:
      "https://img1.looper.com/img/gallery/the-untold-truth-of-trailer-park-boys/intro.jpg",
    phone: "123456789",
    certificationsUrls: ["Fixing shopping carts"],
    jobTypeDescription: "I can steal and fix shopping carts",
    experienceDescription: "thousands of carts",
    personDescription:
      "I love cats. I've started collecting money on security deposit for my friends Ricky and Julian"
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
    const [successButtonText, warningButtonText] = [
      "Potwierdź zmiany",
      "Usuń konto"
    ];
    return (
      <Auxiliary className="container-fluid">
        <div className="row " style={{ marginRight: 0, marginTop: 10 }}>
          <div className="col-sm-6 col-xl-4">
            <div className="row-fluid">
              <Photo photoUrl={photoUrl} />
            </div>
          </div>

          <div className="col-sm-6 col-xl-8">
            <div className="row-fluid">
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
                certificationsUrls={certificationsUrls}
              />
            </div>
            <div className="row-fluid">
              <Birthday
                birthday={birthday}
                birthdayOnChange={this.birthdayOnChange}
              />
            </div>
          </div>

          <div className="col-sm-6 ">
            <div className="row-fluid">
              <JobTypeDescription jobTypeDescription={jobTypeDescription} />
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="row-fluid">
              <ExperienceDescription
                experienceDescription={experienceDescription}
              />
            </div>
          </div>
          <div className="col-sm-12 ">
            <div className="row-fluid">
              <PersonDescription personDescription={personDescription} />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row-fluid ">
              <button
                type="button"
                class="btn btn-danger save-button-extension"
              >
                {warningButtonText}
              </button>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row-fluid">
              <button
                type="button"
                class="btn btn-success save-button-extension"
              >
                {successButtonText}
              </button>
            </div>
          </div>
        </div>
      </Auxiliary>
    );
  }
}
