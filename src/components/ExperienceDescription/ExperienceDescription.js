import React from "react";
import "./ExperienceDescription.css";

const experienceDescription = props => {
  const description = props.experienceDescription;
  const title = "Jakie masz doświadczenie?";
  return (
    <div class="form-group textbox-area-style">
      <label for="ExperienceDescriptionTextarea">{title}</label>
      <textarea
        class="form-control"
        id="ExperienceDescriptionTextarea"
        rows="3"
        defaultValue={description}
      />
    </div>
  );
};

export default experienceDescription;
