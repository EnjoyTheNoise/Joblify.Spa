import React, { Component, StrictMode } from "react";
import Photo from "../components/Photo/Photo.js";
import Birthday from "../components/PersonalData/Birthday/Birthday.js";
import JobTypeDescription from "../components/JobTypeDescription/JobTypeDescription.js";
import ExperienceDescription from "../components/ExperienceDescription/ExperienceDescription.js";
import PersonDescription from "../components/PersonDescription/PersonDescription.js";
import Auxiliary from "../Auxiliary.js";
import "./EditProfileButtonsExtensions.css";
import validator from "validator";
import BasicUserData from "../components/PersonalData/BasicUserData/BasicUserData.js";
export default class EditProfileContainer extends Component {
  state = {
    userID: "",
    email: "123@123.xd",
    firstName: "123",
    firstNameValidation: false,
    lastName: "bubbels",
    lastNameValidation: false,
    birthday: new Date(),
    photoUrl:
      "https://img1.looper.com/img/gallery/the-untold-truth-of-trailer-park-boys/intro.jpg",
    phone: "",
    phoneValidation: false,
    certificationsUrls: ["Fixing shopping carts"],
    jobTypeDescription: "I can",
    experienceDescription: "thousands of carts",
    personDescription:
      "I love cats. I've started collecting money on security deposit for my friends Ricky and Julian",
    jobTypeDescriptionValidation: false,
    experienceDescriptionValidation: false,
    personDescriptionValidation: false
  };

  birthdayOnChange = date => {
    this.setState({
      birthday: date
    });
  };

  isFirstNameValid = firstname => {
    if (
      validator.isAscii(firstname) &&
      validator.isAlpha(firstname) &&
      validator.isByteLength(firstname, { min: 0, max: 50 }) &&
      !validator.isEmpty(firstname)
    ) {
      this.setState({
        firstNameValidation: true
      });
    } else {
      this.setState({
        firstNameValidation: false
      });
    }
  };

  firstNameChangeHandler = event => {
    this.isFirstNameValid(event.target.value);
    if (this.state.firstNameValidation) {
      this.setState({
        firstName: event.target.value
      });
    }
  };
  isLastNameValid = lastname => {
    if (
      validator.isAscii(lastname) &&
      validator.isAlpha(lastname) &&
      validator.isByteLength(lastname, { min: 0, max: 50 }) &&
      !validator.isEmpty(lastname)
    ) {
      this.setState({
        lastNameValidation: true
      });
    } else {
      this.setState({
        lastNameValidation: false
      });
    }
  };
  lastNameChangeHandler = event => {
    this.isFirstNameValid(event.target.value);
    if (this.state.lastNameValidation) {
      this.setState({
        lastName: event.target.value
      });
    }
  };
  isPhoneValid = phone => {
    if (validator.isMobilePhone(phone) && !validator.isEmpty(phone)) {
      this.setState({
        phoneValidation: true
      });
    } else {
      this.setState({
        phoneValidation: false
      });
    }
  };
  phoneOnChange = event => {
    if (this.isPhoneValid(event.target.value)) {
      this.setState({
        phone: event.target.value
      });
    }
  };

  isJobDescriptionValid(description) {
    if (
      validator.isByteLength(description, { min: 0, max: 1000 }) &&
      !validator.isEmpty(description)
    ) {
      console.log("noelo");
      this.setState({
        jobTypeDescriptionValidation: true
      });
    } else {
      this.setState({
        jobTypeDescriptionValidation: false
      });
    }
  }
  jobDescriptionChangeHandler = event => {
    this.isJobDescriptionValid(event.target.value);
    if (this.state.jobTypeDescriptionValidation)
      this.setState({
        jobTypeDescription: event.target.value
      });
  };

  isExperienceDescriptionValid(description) {
    if (
      validator.isByteLength(description, { min: 0, max: 1000 }) &&
      !validator.isEmpty(description)
    ) {
      this.setState({
        experienceDescriptionValidation: true
      });
    } else {
      this.setState({
        experienceDescriptionValidation: false
      });
    }
  }
  experienceDescriptionChangeHandler = event => {
    this.isExperienceDescriptionValid(event.target.value);
    if (this.state.experienceDescriptionValidation)
      this.setState({
        experienceDescription: event.target.value
      });
  };

  isPersonDescriptionValid(description) {
    if (
      validator.isByteLength(description, { min: 0, max: 1000 }) &&
      !validator.isEmpty(description)
    ) {
      this.setState({
        personDescriptionValidation: true
      });
    } else {
      this.setState({
        personDescriptionValidation: false
      });
    }
  }
  personDescriptionChangeHandler = event => {
    this.isPersonDescriptionValid(event.target.value);
    if (this.state.personDescriptionValidation)
      this.setState({
        personDescription: event.target.value
      });
  };

  componentDidMount() {
    this.isFirstNameValid(this.state.firstName);
    this.isLastNameValid(this.state.lastName);
    this.isPhoneValid(this.state.phone);
    this.isExperienceDescriptionValid(this.state.experienceDescription);
    this.isJobDescriptionValid(this.state.jobTypeDescription);
    this.isPersonDescriptionValid(this.state.personDescription);
  }
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
      personDescription,
      firstNameValidation,
      lastNameValidation,
      phoneValidation,
      jobTypeDescriptionValidation,
      personDescriptionValidation,
      experienceDescriptionValidation
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
              <BasicUserData
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
                firstNameValidation={firstNameValidation}
                lastNameValidation={lastNameValidation}
                phoneValidation={phoneValidation}
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
              <JobTypeDescription
                jobTypeDescription={jobTypeDescription}
                jobTypeDescriptionValidation={jobTypeDescriptionValidation}
                jobDescriptionChangeHandler={this.jobDescriptionChangeHandler}
              />
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="row-fluid">
              <ExperienceDescription
                experienceDescription={experienceDescription}
                experienceDescriptionValidation={
                  experienceDescriptionValidation
                }
                experienceDescriptionChangeHandler={
                  this.experienceDescriptionChangeHandler
                }
              />
            </div>
          </div>
          <div className="col-sm-12 ">
            <div className="row-fluid">
              <PersonDescription
                personDescription={personDescription}
                personDescriptionValidation={personDescriptionValidation}
                personDescriptionChangeHandler={
                  this.personDescriptionChangeHandler
                }
              />
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
