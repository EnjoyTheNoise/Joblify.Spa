import React from "react";
import "./JobTypeDescription.css";

const jobTypeDescription = props => {
  const {
    jobTypeDescription,
    jobTypeDescriptionValidation,
    jobDescriptionChangeHandler
  } = props;
  const validationStyleSuccess = "form-control is-valid";
  const validationStyleFail = "form-control is-invalid";
  const textfieldName = "jobTypeDescription";
  const title = "Czym się zajmujesz?";
  return (
    <div className="form-group textbox-area-style">
      <label for="jobDescriptionTextarea">{title}</label>
      <textarea
        className={
          jobTypeDescriptionValidation
            ? validationStyleSuccess
            : validationStyleFail
        }
        id="jobDescriptionTextarea"
        rows="3"
        defaultValue={jobTypeDescription}
        onChange={jobDescriptionChangeHandler}
        name={textfieldName}
      />
    </div>
  );
};

export default jobTypeDescription;
