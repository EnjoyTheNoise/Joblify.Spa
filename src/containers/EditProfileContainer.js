import React, { Component, StrictMode } from "react";
import Spinner from "../components/Photo/Spinner.js";
import Buttons from "../components/Photo/Buttons.js";
import Images from "../components/Photo/Images.js";
import Birthday from "../components/PersonalData/Birthday/Birthday.js";
import JobTypeDescription from "../components/JobTypeDescription/JobTypeDescription.js";
import ExperienceDescription from "../components/ExperienceDescription/ExperienceDescription.js";
import PersonDescription from "../components/PersonDescription/PersonDescription.js";
import Auxiliary from "../Auxiliary.js";
import "./EditProfileButtonsExtensions.css";
import validator from "validator";
import BasicUserData from "../components/PersonalData/BasicUserData/BasicUserData.js";
export default class EditProfileContainer extends Component {
  state = {
    userID: "",
    email: "wwwwwa@wp.pl",
    firstName: "123",
    firstNameValidation: false,
    lastName: "bubbels",
    lastNameValidation: false,
    externalProviderName: "Google",
    roleName: "rola",
    birthday: new Date(),
    uploading: false,
    images: [
      {
        secure_url: [
          "https://img1.looper.com/img/gallery/the-untold-truth-of-trailer-park-boys/intro.jpg"
        ]
      }
    ],
    phone: "",
    phoneValidation: false,
    certificationsUrls: ["Fixing shopping carts"],
    jobTypeDescription: "I can",
    experienceDescription: "thousands of carts",
    personDescription:
      "I love cats. I've started collecting money on security deposit for my friends Ricky and Julian",
    jobTypeDescriptionValidation: false,
    experienceDescriptionValidation: false,
    personDescriptionValidation: false
  };

  birthdayChangeHandler = date => {
    this.setState({
      birthday: date
    });
  };

  isFirstNameValid = firstname => {
    if (
      validator.isAscii(firstname) &&
      validator.isAlpha(firstname) &&
      validator.isByteLength(firstname, { min: 0, max: 50 }) &&
      !validator.isEmpty(firstname)
    ) {
      this.setState({
        firstNameValidation: true
      });
    } else {
      this.setState({
        firstNameValidation: false
      });
    }
  };

  fieldChangeHandler = event => {
    switch (event.target.id) {
      case "firstName":
        this.isFirstNameValid(event.target.value);
        if (this.state.firstNameValidation) {
          this.setState({
            firstName: event.target.value
          });
        }
        break;
      case "lastName":
        this.isLastNameValid(event.target.value);
        if (this.state.lastNameValidation) {
          this.setState({
            lastName: event.target.value
          });
        }
        break;
      case "phone":
        this.isPhoneValid(event.target.value);
        if (this.state.phoneValidation) {
          this.setState({
            phone: event.target.value
          });
        }
        break;
      default:
        break;
    }
  };

  isLastNameValid = lastname => {
    if (
      validator.isAscii(lastname) &&
      validator.isAlpha(lastname) &&
      validator.isByteLength(lastname, { min: 0, max: 50 }) &&
      !validator.isEmpty(lastname)
    ) {
      this.setState({
        lastNameValidation: true
      });
    } else {
      this.setState({
        lastNameValidation: false
      });
    }
  };

  isPhoneValid = phone => {
    if (validator.isMobilePhone(phone) && !validator.isEmpty(phone)) {
      this.setState({
        phoneValidation: true
      });
    } else {
      this.setState({
        phoneValidation: false
      });
    }
  };

  descriptionsChangeHandler = event => {
    switch (event.target.id) {
      case "jobDescriptionTextarea":
        this.isJobDescriptionValid(event.target.value);
        if (this.state.jobTypeDescriptionValidation)
          this.setState({
            jobTypeDescription: event.target.value
          });
        break;

      case "experienceDescriptionTextarea":
        this.isExperienceDescriptionValid(event.target.value);
        if (this.state.experienceDescriptionValidation)
          this.setState({
            experienceDescription: event.target.value
          });
        break;

      case "personDescriptionTextarea":
        this.isPersonDescriptionValid(event.target.value);
        if (this.state.personDescriptionValidation)
          this.setState({
            personDescription: event.target.value
          });
        break;
      default:
        break;
    }
  };

  isJobDescriptionValid(description) {
    if (
      validator.isByteLength(description, { min: 0, max: 1000 }) &&
      !validator.isEmpty(description)
    ) {
      this.setState({
        jobTypeDescriptionValidation: true
      });
    } else {
      this.setState({
        jobTypeDescriptionValidation: false
      });
    }
  }

  isExperienceDescriptionValid(description) {
    if (
      validator.isByteLength(description, { min: 0, max: 1000 }) &&
      !validator.isEmpty(description)
    ) {
      this.setState({
        experienceDescriptionValidation: true
      });
    } else {
      this.setState({
        experienceDescriptionValidation: false
      });
    }
  }

  isPersonDescriptionValid(description) {
    if (
      validator.isByteLength(description, { min: 0, max: 1000 }) &&
      !validator.isEmpty(description)
    ) {
      this.setState({
        personDescriptionValidation: true
      });
    } else {
      this.setState({
        personDescriptionValidation: false
      });
    }
  }

  componentDidMount() {
    this.isFirstNameValid(this.state.firstName);
    this.isLastNameValid(this.state.lastName);
    this.isPhoneValid(this.state.phone);
    this.isExperienceDescriptionValid(this.state.experienceDescription);
    this.isJobDescriptionValid(this.state.jobTypeDescription);
    this.isPersonDescriptionValid(this.state.personDescription);
  }

  ImageOnChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`$localhost:2150/api/user/image-upload`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          images
        });
      });
  };

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    });
  };
  render() {
    const {
      userID,
      email,
      firstName,
      lastName,
      birthday,
      uploading,
      images,
      phone,
      certificationsUrls,
      jobTypeDescription,
      experienceDescription,
      personDescription,
      firstNameValidation,
      lastNameValidation,
      externalProviderName,
      roleName,
      phoneValidation,
      jobTypeDescriptionValidation,
      personDescriptionValidation,
      experienceDescriptionValidation
    } = this.state;
    const [successButtonText, warningButtonText] = [
      "Potwierdź zmiany",
      "Usuń konto"
    ];

    const photoUploader = () => {
      switch (true) {
        case uploading:
          return <Spinner />;
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />;
        default:
          return <Buttons onChange={this.ImageOnChange} />;
      }
    };

    return (
      <Auxiliary className="container-fluid">
        <div className="row " style={{ marginRight: 0, marginTop: 10 }}>
          <div className="col-sm-6 col-xl-4">
            <div className="row-fluid">{photoUploader()}</div>
          </div>

          <div className="col-sm-6 col-xl-8">
            <div className="row-fluid">
              <BasicUserData
                firstName={firstName}
                firstNameHandler={this.fieldChangeHandler}
                lastName={lastName}
                lastNameHandler={this.fieldChangeHandler}
                email={email}
                phone={phone}
                phoneOnChange={this.fieldChangeHandler}
                certificationsUrls={certificationsUrls}
                firstNameValidation={firstNameValidation}
                lastNameValidation={lastNameValidation}
                phoneValidation={phoneValidation}
              />
            </div>
            <div className="row-fluid">
              <Birthday
                birthday={birthday}
                birthdayOnChange={this.birthdayChangeHandler}
              />
            </div>
          </div>

          <div className="col-sm-6 ">
            <div className="row-fluid">
              <JobTypeDescription
                jobTypeDescription={jobTypeDescription}
                jobTypeDescriptionValidation={jobTypeDescriptionValidation}
                jobDescriptionChangeHandler={this.descriptionsChangeHandler}
              />
            </div>
          </div>
          <div className="col-sm-6 ">
            <div className="row-fluid">
              <ExperienceDescription
                experienceDescription={experienceDescription}
                experienceDescriptionValidation={
                  experienceDescriptionValidation
                }
                experienceDescriptionChangeHandler={
                  this.descriptionsChangeHandler
                }
              />
            </div>
          </div>
          <div className="col-sm-12 ">
            <div className="row-fluid">
              <PersonDescription
                personDescription={personDescription}
                personDescriptionValidation={personDescriptionValidation}
                personDescriptionChangeHandler={this.descriptionsChangeHandler}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row-fluid ">
              <button
                type="button"
                class="btn btn-danger save-button-extension"
              >
                {warningButtonText}
              </button>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row-fluid">
              <button
                type="button"
                class="btn btn-success save-button-extension"
              >
                {successButtonText}
              </button>
            </div>
          </div>
        </div>
      </Auxiliary>
    );
  }
}
