import React from "react";
import "./BasicUserData.css";

const BasicUserData = props => {
  const {
    email,
    firstName,
    lastName,
    phone,
    firstNameHandler,
    lastNameHandler,
    phoneOnChange
  } = props;

  const [emailLabel, firstNameLabel, lastNameLabel, phoneLabel] = [
    "Email",
    "Imię",
    "Nazwisko",
    "Numer telefonu"
  ];
  return (
    <form>
      <div className="form-group form-background-color">
        <label>{emailLabel}</label>
        <input className="form-control" id="email" value={email} />
        <label>{firstNameLabel}</label>
        <input
          className="form-control"
          id="firstName"
          defaultValue={firstName}
          onChange={firstNameHandler}
        />
        <label>{lastNameLabel}</label>
        <input
          className="form-control"
          id="lastname"
          defaultValue={lastName}
          onChange={lastNameHandler}
        />
        <label>{phoneLabel}</label>
        <input
          className="form-control"
          id="phone"
          defaultValue={phone}
          onChange={phoneOnChange}
        />
      </div>
    </form>
  );
};

export default BasicUserData;
