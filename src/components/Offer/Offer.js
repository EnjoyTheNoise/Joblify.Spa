import React, { Component } from "react";

class Offer extends Component {
  componentDidMount = () => {
    
  };

  render() {
    return (
      <div className="row">
        <div className="titleAddOffer">
          <label htmlFor="offerTitle" className="col-sm-6 col-form-label">
            <h1> {this.props.title} </h1>
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
                Właściel oferty
              </label>
              <div className="col-sm-3">
                <label
                  type="text"
                  className="col-form-label"
                  id="availableTime"
                  name="availableTime"
                >
                  {this.props.userName}
                </label>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="availableTime"
                className="col-sm-2 col-form-label"
              >
                Dostępny czas
              </label>
              <div className="col-sm-3">
                <label
                  type="text"
                  className="col-form-label"
                  id="availableTime"
                  name="availableTime"
                >
                  {this.props.availableTime}
                </label>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="price" className="col-sm-2 col-form-label">
                Cena
              </label>
              <div className="col-sm-3">
                <label
                  type="text"
                  className="col-form-label"
                  id="price"
                  name="price"
                >
                  {this.props.price}
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
          </form>
        </div>

        <div className="col-sm-12">
          {/* dodaj on change*/}
          <button className="btn btn-primary">Przejdź do profilu</button>
        </div>
      </div>
    );
  }
}

export default Offer;
