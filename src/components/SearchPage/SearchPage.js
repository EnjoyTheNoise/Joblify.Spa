import React, { Component } from "react";
import "./SearchPage.css";
import Offer from "./Offer/Offer";
import PaginationContainer from "../../containers/PaginationContainer";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  render() {
    let categoryDisplay =
      this.props.category === "Employer" ? "Pracodawcy" : "Pracobiorcy";
    const orderByState = this.props.orderBy;
    const tradeState = this.props.trade;

    console.log(this.props.offers);

    let offers = this.props.offers.map(offer => {
      return (
        <Link to={"/offer/" + offer.document.id}>
          <Offer
            key={offer.document.id}
            rating={4} // ocena 1-5 gwiazdek, ma dostać od API
            firstName={offer.document.firstName}
            description={offer.document.description}
          />
        </Link>
      );
    });

    if (offers.length === 0) {
      return <p>Brak wyników.</p>;
    } else {
      return (
        <div className="row">
          <p className="phraseSearchPage">
            wyniki dla frazy: {this.props.phrase}
          </p>
          <form className="form-inline orderBy" style={{ clear: "both" }}>
            <div className="form-group">
              <label className="control-label orderByDropboxLabel">
                {categoryDisplay}
                <select
                  value={orderByState}
                  className="form-control dropdown"
                  name="orderBy"
                  onChange={this.props.handleOrderBySelect}
                >
                  <option value="price desc">wg ceny malejąco</option>
                  <option value="price asc">wg ceny rosnąco</option>
                  {/* <option value="date">wg daty utworzenia</option> */}
                </select>
              </label>

              <label className="control-label orderByDropboxLabel">
                {"Branża"}
                <select
                  value={tradeState}
                  className="form-control dropdown"
                  name="trade"
                  onChange={this.props.handleOrderBySelect}
                >
                  <option value="All">Wszystkie</option>
                  {this.props.trades}
                </select>
              </label>
            </div>
            <div className="form-group" />
          </form>

          <div className="offers">
            {offers}
            <PaginationContainer
              phrase={this.props.phrase}
              category={this.props.category}
              orderBy={this.props.orderBy}
              currentPage={this.props.page}
              totalItems={offers.length}
              handlePageChange={this.props.handlePageChange}
            />
          </div>
        </div>
      );
    }
  }
}

export default SearchPage;
