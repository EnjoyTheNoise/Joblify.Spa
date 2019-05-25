import React, { Component } from "react";
import "./SearchPage.css";
import Offer from "./Offer/Offer";
import Pagination from "./Pagination/Pagination";

class SearchPage extends Component {
  render() {
    let optionDisplay =
      this.props.option === "employers" ? "Pracodawcy" : "Pracobiorcy";
    const filterState = this.props.filter;

    console.log(this.props.offers);

    let offers = this.props.offers.map(offer => {
      return (
        <Offer
          key={offer.document.id}
          firstName={offer.document.firstName}
          lastName={offer.document.firstName}
          description={offer.document.firstName}
          price={offer.document.price}
          />
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

          <form className="form-inline filter" style={{ clear: "left" }}>
            <div className="form-group">
              <label className="control-label filterDropboxLabel">
                {optionDisplay}
                <select
                  value={filterState}
                  className="form-control"
                  name="filter"
                  onChange={this.props.handleFilterSelect}
                >
                  <option value="stars">wg ilości gwiazdek</option>
                  <option value="price">wg ceny</option>
                  <option value="date">wg daty utworzenia</option>
                </select>
              </label>
            </div>
            <div className="form-group" />
          </form>

          <div className="offers">
            {offers}
            <Pagination
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
