import React from "react";
import "./PersonDescription.css";

const experienceDescription = props => {
  const {
    personDescription,
    personDescriptionValidation,
    personDescriptionChangeHandler
  } = props;
  const validationStyleSuccess = "form-control is-valid";
  const validationStyleFail = "form-control is-invalid";
  const title = "Twój opis";
  return (
    <div className="form-group textbox-area-style">
      <label for="PersonDescriptionTextarea">{title}</label>
      <textarea
        className={
          personDescriptionValidation
            ? validationStyleSuccess
            : validationStyleFail
        }
        id="PersonDescriptionTextarea"
        rows="3"
        defaultValue={personDescription}
        onChange={personDescriptionChangeHandler}
      />
    </div>
  );
};

export default experienceDescription;
