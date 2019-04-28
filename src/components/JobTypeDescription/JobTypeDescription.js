import React from "react";
import "./JobTypeDescription.css";

const jobTypeDescription = props => {
  const description = props.jobTypeDescription;
  const title = "Czym się zajmujesz?";
  return (
    <div class="form-group textbox-area-style">
      <label for="jobDescriptionTextarea">{title}</label>
      <textarea
        class="form-control"
        id="jobDescriptionTextarea"
        rows="3"
        defaultValue={description}
      />
    </div>
  );
};

export default jobTypeDescription;
