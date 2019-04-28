import React from "react";
import BasicUserData from "./BasicUserData/BasicUserData.js";

const personalData = props => {
  const {
    firstName,
    firstNameHandler,
    lastName,
    lastNameHandler,
    email,
    phone,
    phoneOnChange,
    certificationsUrls
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
      certificationsUrls={certificationsUrls}
    />
  );
};

export default personalData;
