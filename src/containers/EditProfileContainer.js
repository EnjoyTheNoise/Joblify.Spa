import React, { Component } from "react";
import validator from "validator";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditProfileForm from "../components/EditProfile/EditProfileForm.js";
import { editProfile } from "../actions/EditProfileActions";
import { getUser, addUser } from "../actions/UserActions";
import { logout } from "../actions/LoginActions";
import { providers, roles } from "../enums";

class EditProfileContainer extends Component {
  state = {
    email: { value: "", isValid: false },
    firstName: { value: "", isValid: false },
    lastName: { value: "", isValid: false },
    birthdate: { value: "", isValid: false },
    phoneNumber: { value: "", isValid: false },
    description: { value: "", isValid: false },
    experience: { value: "", isValid: false },
    fieldOfInterest: { value: "", isValid: false },
    isFacebook: false
  };

  handlebirthdateInput = date => {
    this.handleUserInput({ target: { id: "birthdate", value: date } });
  };

  handleUserInput = e => {
    let state = this.state;

    state[e.target.id].value = e.target.value;
    state[e.target.id].isValid = this.validateField(e.target);

    this.setState(state);
  };

  validateField = target => {
    switch (target.id) {
      case "birthdate": {
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
      case "phoneNumber": {
        return (
          validator.isMobilePhone(target.value) &&
          !validator.isEmpty(target.value)
        );
      }
      case "description":
      case "experience":
      case "fieldOfInterest": {
        return (
          validator.isByteLength(target.value, { min: 0, max: 1000 }) &&
          !validator.isEmpty(target.value)
        );
      }
    }
  };

  checkFormValid = () => {
    let state = this.state;
    for (let prop in state) {
      if (state.hasOwnProperty(prop)) {
        let field = state[prop];
        if (field.hasOwnProperty("isValid")) {
          if (!field.isValid) {
            return false;
          }
        }
      }
    }
    return true;
  };

  handleConfirmation = () => {
    if (!this.checkFormValid()) {
      return;
    }
    let {
      firstName,
      lastName,
      email,
      birthdate,
      description,
      phoneNumber,
      experience,
      fieldOfInterest,
      isFacebook
    } = this.state;
    let { provider, facebook, google } = this.props;

    let data = {
      externalProviderName: provider,
      roleName: roles.USER,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      birthdate: birthdate.value,
      photoUrl: isFacebook ? facebook.picture.url : google.profileObj.imageUrl,
      description: description.value,
      phoneNumber: phoneNumber.value,
      experience: experience.value,
      fieldOfInterest: fieldOfInterest.value
    };

    if (this.props.isFirstLogin) {
      this.addUser(data);
    } else {
      this.editUser(data);
    }
  };

  addUser = data => {
    this.props.actions.addUser(data);
  };

  editUser = data => {
    let addData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      birthdate: data.birthdate,
      photoUrl: data.photoUrl,
      description: data.description,
      phoneNumber: data.phoneNumber,
      experience: data.experience,
      fieldOfInterest: data.fieldOfInterest
    };

    this.props.actions.editProfile(addData);
  };

  handleRejection = () => {
    if (this.props.isFirstLogin) {
      this.props.actions.logout();
    }
    this.props.history.push("/");
  };

  loadUserInfoFromReducer = () => {
    const { facebook, google } = this.props;
    let state = this.state;

    state.isFacebook = this.props.provider === providers.FACEBOOK;

    state.email.value = state.isFacebook
      ? facebook.email
      : google.profileObj.email;
    state.firstName.value = state.isFacebook
      ? facebook.first_name
      : google.profileObj.givenName;
    state.lastName.value = state.isFacebook
      ? facebook.last_name
      : google.profileObj.familyName;

    this.setState(state);
  };

  getUserInfoFromApi = () => {
    this.props.actions.getUser(this.state.email.value).then(() => {
      let state = this.state;
      let user = this.props.user;
      for (let prop in state) {
        if (state.hasOwnProperty(prop)) {
          if (prop === "birthdate") {
            state["birthdate"].value = new Date(user["birthdate"]);
          } else {
            let field = state[prop];
            if (field.hasOwnProperty("value")) {
              field.value = user[prop];
            }
          }
        }
      }
      this.setState(state);
      this.initialValidation();
    });
  };

  initialValidation = () => {
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
  };

  componentDidMount() {
    this.loadUserInfoFromReducer();
    if (this.props.isFirstLogin) {
      this.initialValidation();
    } else {
      this.getUserInfoFromApi();
    }
  }

  render() {
    const {
      email,
      firstName,
      lastName,
      birthdate,
      phoneNumber,
      description,
      experience,
      fieldOfInterest
    } = this.state;
    return (
      <EditProfileForm
        email={email}
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        birthdate={birthdate}
        description={description}
        experience={experience}
        fieldOfInterest={fieldOfInterest}
        handleInput={this.handleUserInput}
        handlebirthdate={this.handlebirthdateInput}
        isFirstLogin={this.props.isFirstLogin}
        isFetching={this.props.isFetching}
        handleConfirmation={this.handleConfirmation}
        handleRejection={this.handleRejection}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFirstLogin: state.login.isFirstLogin,
  isFetching: state.edit.isFetching,
  provider: state.login.provider,
  facebook: state.facebookLogin,
  google: state.googleLogin,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      editProfile,
      getUser,
      addUser,
      logout
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileContainer);
