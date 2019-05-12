import React, { Component } from "react";
import "../../App.js";
import "./AddOffer.css";

class AddOffer extends Component {
  

  render() {

    let categoriesOptionItems;
    let tradesOptionItems;
    if (this.props.categories != null)
    {
      categoriesOptionItems = this.props.categories.map(category => 
        <option key={category.id}>{category.name}</option>
      );
    }
    
    if (this.props.trades != null) {
      tradesOptionItems = this.props.trades.map(trade => 
        <option key={trade.id}>{trade.name}</option>
      );
    }
    console.log(this.props.title);

    return (
      <div className="row">
        <div className="titleAddOffer">
          <h1>Nowa oferta</h1>
        </div>
        <br />
        <div className="col-sm-9 customForm">
          <form>
            <div className="form-group row">
              <label htmlFor="inputCategory" className="col-sm-2 col-form-label">
                Kategoria
              </label>
              <div className="col-sm-10">
                <select id="inputCategory" className="form-control">
                  <option value="" disabled selected>Wybierz kategorię</option>
                  {categoriesOptionItems}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputTrade" className="col-sm-2 col-form-label">
                Branża
              </label>
              <div className="col-sm-10">
                <select id="inputTrade" className="form-control">
                  <option value="" disabled selected>Wybierz branżę</option>
                  {tradesOptionItems}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputAvailableTime"
                className="col-sm-2 col-form-label"
              >
                Dostępny czas
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAvailableTime"
                  placeholder="Podaj czas usługi"
                  name="availableTime"
                  defaultValue={this.props.availableTime}
                  onChange={this.props.handleUserInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPrice" className="col-sm-2 col-form-label">
                Cena usługi
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control form-field"
                  id="inputPrice"
                  placeholder="Podaj cenę usługi"
                  name="price"
                  defaultValue={this.props.price}
                  onChange={this.props.handleUserInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputOfferTitle" className="col-sm-2 col-form-label">
                Tytuł oferty
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputOfferTitle"
                  placeholder="Podaj tytuł oferty"
                  defaultValue={this.props.title}
                  name="title"
                  required
                  onChange={this.props.handleUserInput}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputDescription"
                className="col-sm-2 labelDescription"
              >
                Opis
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="inputDescription"
                  rows="10"
                  name="description"
                  defaultValue={this.props.description}
                  onChange={this.props.handleUserInput}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="col-sm-12">
          <button onClick={this.props.onSubmit} className="btn btn-primary saveOfferButton">Zapisz</button>
        </div>
      </div>
    );
  }
}

export default AddOffer;
