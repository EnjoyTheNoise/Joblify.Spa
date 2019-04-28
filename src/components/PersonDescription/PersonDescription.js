import React from "react";
import "./PersonDescription.css";

const experienceDescription = props => {
  const description = props.personDescription;
  const title = "Twój opis";
  return (
    <div class="form-group textbox-area-style">
      <label for="PersonDescriptionTextarea">{title}</label>
      <textarea
        class="form-control"
        id="PersonDescriptionTextarea"
        rows="3"
        defaultValue={description}
      />
    </div>
  );
};

export default experienceDescription;
