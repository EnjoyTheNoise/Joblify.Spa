import React from "react";
import JobTypeDescription from "./JobTypeDescription/JobTypeDescription";
import ExperienceDescription from "./ExperienceDescription/ExperienceDescription.js";
import PersonDescription from "./PersonDescription/PersonDescription.js";
import BasicUserData from "./PersonalData/BasicUserData/BasicUserData.js";
import "./EditProfile.css";

class EditProfileForm extends React.Component {
  render() {
    const {
      email,
      firstName,
      lastName,
      birthdate,
      phoneNumber,
      description,
      experience,
      fieldOfInterest,
      handleInput,
      handlebirthdate,
      isFetching,
      isFirstLogin
    } = this.props;

    const [successButtonText, warningButtonText] = [
      "Zapisz zmiany",
      isFirstLogin ? "Usuń konto" : "Powrót"
    ];

    const firstLogin = (
      <div className="col-sm-12">
        <div className="row-fluid warning-header">Pierwszy login, potwierdz albo elo XD</div>
      </div>
    );

    return (
      <div className="container-fluid">
        <form className="form-center">
          {isFirstLogin ? firstLogin : firstLogin}
          <div className="col-sm-12">
            <div className="row-fluid">
              <BasicUserData
                firstName={firstName}
                lastName={lastName}
                email={email}
                phoneNumber={phoneNumber}
                birthdate={birthdate}
                handlebirthdate={handlebirthdate}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <JobTypeDescription
                description={description}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <ExperienceDescription
                experience={experience}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <PersonDescription
                fieldOfInterest={fieldOfInterest}
                handleInput={handleInput}
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="row-fluid">
              <button
                type="button"
                className="btn btn-success save-button-extension"
                onClick={this.props.handleConfirmation}
                disabled={isFetching}
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
                onClick={this.props.handleRejection}
                disabled={isFetching}
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
