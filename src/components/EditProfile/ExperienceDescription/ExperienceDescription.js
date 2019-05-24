import React from "react";
import "./ExperienceDescription.css";

class experienceDescription extends React.Component {
  render() {
    const { experience, handleInput } = this.props;
    const validationStyleSuccess = "form-control is-valid";
    const validationStyleFail = "form-control is-invalid";
    const title = "Jakie masz doświadczenie?";
    return (
      <div className="form-group textbox-area-style">
        <label>{title}</label>
        <textarea
          className={
            experience.isValid ? validationStyleSuccess : validationStyleFail
          }
          id="experience"
          rows="3"
          value={experience.value}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default experienceDescription;
