import React from "react";
import BasicUserData from "./BacisUserData/BasicUserData.js";

const personalData = props => {
  const {
    firstName,
    firstNameHandler,
    lastName,
    lastNameHandler,
    email,
    phone,
    phoneOnChange,
  } = props;

  return (
    <BasicUserData
      email={email}
      firstName={firstName}
      lastName={lastName}
      phone={phone}
      firstNameHandler={firstNameHandler}
      lastNameHandler={lastNameHandler}
      phoneOnChange={phoneOnChange}
    />
  );
};

export default personalData;
