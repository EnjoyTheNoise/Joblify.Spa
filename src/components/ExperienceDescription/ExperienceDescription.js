import React from "react";
import "./ExperienceDescription.css";

const experienceDescription = props => {
  const {
    experienceDescription,
    experienceDescriptionValidation,
    experienceDescriptionChangeHandler
  } = props;
  const validationStyleSuccess = "form-control is-valid";
  const validationStyleFail = "form-control is-invalid";
  const title = "Jakie masz doświadczenie?";
  return (
    <div className="form-group textbox-area-style">
      <label for="ExperienceDescriptionTextarea">{title}</label>
      <textarea
        className={
          experienceDescriptionValidation
            ? validationStyleSuccess
            : validationStyleFail
        }
        id="ExperienceDescriptionTextarea"
        rows="3"
        defaultValue={experienceDescription}
        onChange={experienceDescriptionChangeHandler}
      />
    </div>
  );
};

export default experienceDescription;
