import React from "react";
import "./JobTypeDescription.css";

class jobTypeDescription extends React.Component {
  render() {
    const { description, handleInput } = this.props;
    const validationStyleSuccess = "form-control is-valid";
    const validationStyleFail = "form-control is-invalid";
    const title = "Czym się zajmujesz?";
    return (
      <div className="form-group textbox-area-style">
        <label>{title}</label>
        <textarea
          className={
            description.isValid ? validationStyleSuccess : validationStyleFail
          }
          id="description"
          rows="3"
          value={description.value}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default jobTypeDescription;
