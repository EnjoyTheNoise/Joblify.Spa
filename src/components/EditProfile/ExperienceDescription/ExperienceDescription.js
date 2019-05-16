import React from "react";
import "./ExperienceDescription.css";

class experienceDescription extends React.Component {
  render() {
    const { experienceDescription, handleInput } = this.props;
    const validationStyleSuccess = "form-control is-valid";
    const validationStyleFail = "form-control is-invalid";
    const title = "Jakie masz doświadczenie?";
    return (
      <div className="form-group textbox-area-style">
        <label>{title}</label>
        <textarea
          className={
            experienceDescription.isValid
              ? validationStyleSuccess
              : validationStyleFail
          }
          id="experienceDescription"
          rows="3"
          value={experienceDescription.value}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default experienceDescription;
