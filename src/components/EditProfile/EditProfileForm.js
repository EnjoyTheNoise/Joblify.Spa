import React from "react";
import JobTypeDescription from "./JobTypeDescription/JobTypeDescription";
import ExperienceDescription from "./ExperienceDescription/ExperienceDescription.js";
import PersonDescription from "./PersonDescription/PersonDescription.js";
import BasicUserData from "./PersonalData/BasicUserData/BasicUserData.js";
import "./EditProfileButtonsExtensions.css";

class EditProfileForm extends React.Component {
  render() {
    const {
      email,
      firstName,
      lastName,
      birthday,
      phone,
      jobTypeDescription,
      experienceDescription,
      personDescription,
      handleInput,
      handleBirthday
    } = this.props;

    const [successButtonText, warningButtonText] = [
      "Potwierdź zmiany",
      "Usuń konto"
    ];

    return (
      <div className="container-fluid">
        <form className="form-center">
          <div className="col-sm-12">
            <div className="row-fluid">
              <BasicUserData
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                birthday={birthday}
                handleBirthday={handleBirthday}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <JobTypeDescription
                jobTypeDescription={jobTypeDescription}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <ExperienceDescription
                experienceDescription={experienceDescription}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <PersonDescription
                personDescription={personDescription}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <button
                type="button"
                className="btn btn-success save-button-extension"
              >
                {successButtonText}
              </button>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid ">
              <button
                type="button"
                className="btn btn-danger save-button-extension"
              >
                {warningButtonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfileForm;
