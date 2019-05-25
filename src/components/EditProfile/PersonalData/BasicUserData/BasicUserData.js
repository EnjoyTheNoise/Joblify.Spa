import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BasicUserData.css";

class BasicUserData extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      birthdate,
      handlebirthdate,
      handleInput
    } = this.props;

    const [emailLabel, firstNameLabel, lastNameLabel, phoneLabel] = [
      "Email",
      "Imię",
      "Nazwisko",
      "Numer telefonu"
    ];
    const [dateFormat, birthdayLabel] = ["dd/MM/yyyy", "Data Urodzin"];

    const validationStyleSuccess = "form-control is-valid";
    const validationStyleFail = "form-control is-invalid";

    console.log("render: " + birthdate.value)

    return (
      <div className="form-group form-background-color">
        <label>{emailLabel}</label>
        <input
          className={
            email.isValid ? validationStyleSuccess : validationStyleFail
          }
          id="email"
          value={email.value}
          onChange={handleInput}
        />
        <label>{firstNameLabel}</label>
        <input
          className={
            firstName.isValid ? validationStyleSuccess : validationStyleFail
          }
          id="firstName"
          value={firstName.value}
          onChange={handleInput}
        />
        <label>{lastNameLabel}</label>
        <input
          className={
            lastName.isValid ? validationStyleSuccess : validationStyleFail
          }
          id="lastName"
          value={lastName.value}
          onChange={handleInput}
        />
        <label>{phoneLabel}</label>
        <input
          className={
            phoneNumber.isValid ? validationStyleSuccess : validationStyleFail
          }
          id="phoneNumber"
          value={phoneNumber.value}
          onChange={handleInput}
        />
        <div className="form-group">
          <label>{birthdayLabel}</label>
          <br />
          <DatePicker
            className={
              birthdate.isValid ? validationStyleSuccess : validationStyleFail
            }
            id="birthdate"
            dateFormat={dateFormat}
            selected={birthdate.value}
            onChange={handlebirthdate}
          />
        </div>
      </div>
    );
  }
}

export default BasicUserData;