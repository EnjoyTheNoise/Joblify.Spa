import React, { Component } from "react";
import "../../App.js";
import "./AddOffer.css";

class AddOffer extends Component {
  
  componentDidMount = () => {
    console.log(this.props.actions.getAllCategories(this.addOffer));
  
    console.log(this.props.actions.getAllTrades(this.addOffer));
  }
  render() {

    let categoriesOptionItems = this.props.categories.map(category => 
      <option key={category.id}>{category.name}</option>
    );

    let tradesOptionItems = this.props.trades.map(trade => 
      <option key={trade.id}>{trade.name}</option>
    );

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
                  onChange={(event) => this.props.availableTime}
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
                  className="form-control"
                  id="inputPrice"
                  placeholder="Podaj cenę usługi"
                  onChange={(event) => this.setState({price: event.target.value})}
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
                  onChange={(event) => this.setState({title: event.target.value})}
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
                  onChange={(event) => this.setState({description: event.target.value})}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="col-sm-12">
          <button onClick={this.postDataHandler} className="btn btn-primary saveOfferButton">Zapisz</button>
        </div>
      </div>
    );
  }
}

export default AddOffer;
