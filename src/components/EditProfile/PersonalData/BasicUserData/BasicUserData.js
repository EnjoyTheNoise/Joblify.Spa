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
      phone,
      birthday,
      handleBirthday,
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
            phone.isValid ? validationStyleSuccess : validationStyleFail
          }
          id="phone"
          value={phone.value}
          onChange={handleInput}
        />
        <div className="form-group">
          <label>{birthdayLabel}</label>
          <br />
          <DatePicker
            className={
              birthday.isValid ? validationStyleSuccess : validationStyleFail
            }
            id="birthday"
            dateFormat={dateFormat}
            selected={birthday.value}
            onChange={handleBirthday}
          />
        </div>
      </div>
    );
  }
}

export default BasicUserData;
