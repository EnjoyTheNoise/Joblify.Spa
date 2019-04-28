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
    phoneOnChange,
    certificationsUrls
  } = props;

  const [
    emailLabel,
    firstNameLabel,
    lastNameLabel,
    phoneLabel,
    certificationsLabel
  ] = ["Email", "Imię", "Nazwisko", "Numer telefonu", "Certyfikaty"];
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
        <label>{certificationsLabel}</label>
        <input
          className="form-control"
          id="certyfications"
          defaultValue={certificationsUrls}
        />
      </div>
    </form>
  );
};

export default BasicUserData;
