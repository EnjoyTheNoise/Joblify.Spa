import React from "react";
import "./JobTypeDescription.css";

class jobTypeDescription extends React.Component {
  render() {
    const { jobTypeDescription, handleInput } = this.props;
    const validationStyleSuccess = "form-control is-valid";
    const validationStyleFail = "form-control is-invalid";
    const title = "Czym się zajmujesz?";
    return (
      <div className="form-group textbox-area-style">
        <label>{title}</label>
        <textarea
          className={
            jobTypeDescription.isValid
              ? validationStyleSuccess
              : validationStyleFail
          }
          id="jobTypeDescription"
          rows="3"
          value={jobTypeDescription.value}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default jobTypeDescription;
