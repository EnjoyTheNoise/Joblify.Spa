import React from "react";
import "./BasicUserData.css";

const BasicUserData = props => {
  const {
    firstName,
    firstNameHandler,
    lastName,
    lastNameHandler,
    email,
    phone,
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
          id="lastName"
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
        <small id="phoneHelp" className="form-text text-muted">
          {phoneMessage}
        </small>
        <label>{certificationsLabel}</label>{" "}
        {/*TO DO! it should enable uploading documents*/}
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
