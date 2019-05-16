import React, { Component } from "react";
import validator from "validator";
import EditProfileForm from "../components/EditProfile/EditProfileForm.js";

export default class EditProfileContainer extends Component {
  state = {
    email: { value: "", isValid: false },
    firstName: { value: "", isValid: false },
    lastName: { value: "", isValid: false },
    birthday: { value: new Date(), isValid: false },
    phone: { value: "", isValid: false },
    jobTypeDescription: { value: "", isValid: false },
    experienceDescription: { value: "", isValid: false },
    personDescription: { value: "", isValid: false }
  };

  handleBirthdayInput = date => {
    this.handleUserInput({ target: { id: "birthday", value: date } });
  };

  handleUserInput = e => {
    let state = this.state;

    state[e.target.id].value = e.target.value;
    state[e.target.id].isValid = this.validateField(e.target);

    this.setState(state);
  };

  validateField = target => {
    switch (target.id) {
      case "birthday": {
        return validator.isBefore(
          target.value.toString(),
          new Date().toString()
        );
      }
      case "email": {
        return validator.isEmail(target.value);
      }
      case "firstName":
      case "lastName": {
        return (
          validator.isAscii(target.value) &&
          validator.isAlpha(target.value) &&
          validator.isByteLength(target.value, { min: 0, max: 50 }) &&
          !validator.isEmpty(target.value)
        );
      }
      case "phone": {
        return (
          validator.isMobilePhone(target.value) &&
          !validator.isEmpty(target.value)
        );
      }
      case "jobTypeDescription":
      case "experienceDescription":
      case "personDescription": {
        return (
          validator.isByteLength(target.value, { min: 0, max: 1000 }) &&
          !validator.isEmpty(target.value)
        );
      }
    }
  };

  componentDidMount() {
    let state = this.state;
    for (let prop in state) {
      if (state.hasOwnProperty(prop)) {
        let field = state[prop];
        if (field.hasOwnProperty("value")) {
          field.isValid = this.validateField({ id: prop, value: field.value });
        }
      }
    }
    this.setState(state);
  }

  render() {
    const {
      email,
      firstName,
      lastName,
      birthday,
      phone,
      jobTypeDescription,
      experienceDescription,
      personDescription
    } = this.state;
    return (
      <EditProfileForm
        email={email}
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        birthday={birthday}
        jobTypeDescription={jobTypeDescription}
        experienceDescription={experienceDescription}
        personDescription={personDescription}
        handleInput={this.handleUserInput}
        handleBirthday={this.handleBirthdayInput}
      />
    );
  }
}
