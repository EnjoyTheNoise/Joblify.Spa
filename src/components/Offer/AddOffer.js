import React, { Component } from "react";
import "../../App.js";
import "./AddOffer.css";

class AddOffer extends Component {
  render() {
    return (
      <div className="row">
        <div className="titleAddOffer">
          <h1>Nowa oferta</h1>
        </div>
        <br />
        <div className="col-sm-9 customForm">
          <form>
            <div className="form-group row">
              <label for="inputCategory" className="col-sm-2 col-form-label">
                Kategoria
              </label>
              <div className="col-sm-10">
                <select id="inputCategory" className="form-control">
                  <option selected>Wybierz kategorię</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputTrade" className="col-sm-2 col-form-label">
                Branża
              </label>
              <div className="col-sm-10">
                <select id="inputTrade" className="form-control">
                  <option selected>Wybierz branżę</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                for="inputAvailableTime"
                className="col-sm-2 col-form-label"
              >
                Dostępny czas
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputAvailableTime"
                  placeholder="Podaj czas usługi"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPrize" className="col-sm-2 col-form-label">
                Cena usługi
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPrize"
                  placeholder="Podaj cenę usługi"
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputOfferTitle" className="col-sm-2 col-form-label">
                Tytuł oferty
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputOfferTitle"
                  placeholder="Podaj tytuł oferty"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="inputDescription"
                className="col-sm-2 labelDescription"
              >
                Opis
              </label>
              <div className="col-sm-10">
                <textarea
                  class="form-control"
                  id="inputDescription"
                  rows="10"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="col-sm-12">
          <button className="btn btn-primary saveOfferButton">Zapisz</button>
        </div>
      </div>
    );
  }
}

export default AddOffer;
