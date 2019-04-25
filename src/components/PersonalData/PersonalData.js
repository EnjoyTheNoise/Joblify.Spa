import React from "react";
import TextField from "./TextField/TextField.js";
const personalData = props => {
  return (
    <TextField
      email={props.email}
      firstName={props.firstName}
      lastName={props.lastName}
      phone={props.phone}
      firstNameHandler={props.firstNameHandler}
      lastNameHandler={props.lastNameHandler}
      phoneHandler={props.phoneHandler}
    />
  );
};

export default personalData;
