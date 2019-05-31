import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div className="row">
        <div className="titleAddOffer">
          <label htmlFor="offerTitle" className="col-sm-6 col-form-label">
            <h1> {this.props.userName} </h1>
          </label>
        </div>
        <br />
        <div className="col-sm-9 customForm">
          <form>
            <div className="form-group row">
              <label
                htmlFor="availableTime"
                className="col-sm-2 col-form-label"
              >
                Numer telefonu
              </label>
              <div className="col-sm-3">
                <label
                  type="text"
                  className="col-form-label"
                  id="availableTime"
                  name="availableTime"
                >
                  {this.props.phoneNumber}
                </label>
              </div>
            </div>
          
           
            
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-2 col-form-label">
                  Opis
                </label>
              <div className="col-sm-10">
                <label
                  className="col-form-label"
                  id="Description"
                  rows="10"
                  name="description"
                >
                  {this.props.description}
                </label>
              </div>
              </div>

              <div className="form-group row">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Zainteresowania
              </label>
              <div className="col-sm-10">
                <label
                  className="col-form-label"
                  id="Description"
                  rows="10"
                  name="description"
                >
                  {this.props.fieldOfInterest}
                </label>
              </div>
              </div>

              <div className="form-group row">
              <label htmlFor="description" className="col-sm-2 col-form-label">
                Doswiadczenie
              </label>
              <div className="col-sm-10">
                <label
                  className="col-form-label"
                  id="Description"
                  rows="10"
                  name="description"
                >
                  {this.props.experience}
                </label>
              </div>
              </div>

          </form>
        </div>

        <div className="col-sm-12">
          {/* dodaj on change*/}
          <button className="btn btn-primary">Pokaż numer telefonu</button>
        </div>
      </div>
    );
  }
}

export default UserProfile;
