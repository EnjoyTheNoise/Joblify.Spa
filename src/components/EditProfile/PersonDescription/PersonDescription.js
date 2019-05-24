import React from "react";
import "./PersonDescription.css";

class experienceDescription extends React.Component {
  render() {
    const { fieldOfInterest, handleInput } = this.props;
    const validationStyleSuccess = "form-control is-valid";
    const validationStyleFail = "form-control is-invalid";
    const title = "Twój opis";
    return (
      <div className="form-group textbox-area-style">
        <label>{title}</label>
        <textarea
          className={
            fieldOfInterest.isValid
              ? validationStyleSuccess
              : validationStyleFail
          }
          id="fieldOfInterest"
          rows="3"
          value={fieldOfInterest.value}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default experienceDescription;
