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
    certificationsUrls,
    firstNameValidation,
    lastNameValidation,
    phoneValidation
  } = props;

  const [
    emailLabel,
    firstNameLabel,
    lastNameLabel,
    phoneLabel,
    certificationsLabel,
    phoneMessage
  ] = [
    "Email",
    "Imię",
    "Nazwisko",
    "Numer telefonu",
    "Certyfikaty",
    "Spacje w numerze telefonu są niedozwolone"
  ];

  const validationStyleSuccess = "form-control is-valid";
  const validationStyleFail = "form-control is-invalid";

  return (
    <form>
      <div className="form-group form-background-color">
        <label>{emailLabel}</label>
        <input className="form-control" id="email" value={email} />
        <label>{firstNameLabel}</label>
        <input
          className={
            firstNameValidation ? validationStyleSuccess : validationStyleFail
          }
          id="firstName"
          defaultValue={firstName}
          onChange={firstNameHandler}
        />
        <label>{lastNameLabel}</label>
        <input
          className={
            lastNameValidation ? validationStyleSuccess : validationStyleFail
          }
          id="lastname"
          defaultValue={lastName}
          onChange={lastNameHandler}
        />
        <label>{phoneLabel}</label>
        <input
          className={
            phoneValidation ? validationStyleSuccess : validationStyleFail
          }
          id="phone"
          defaultValue={phone}
          onChange={phoneOnChange}
        />
        <small id="emailHelp" class="form-text text-muted">
          {phoneMessage}
        </small>
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
