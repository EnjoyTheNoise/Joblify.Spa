import React, { Component } from "react";
import "./SearchPage.css";
import Offer from "./Offer/Offer";
import Pagination from "./Pagination/Pagination";

class SearchPage extends Component {
  render() {
    let optionDisplay =
      this.props.option === "employers" ? "Pracodawcy" : "Pracobiorcy";
    const filterState = this.props.filter;

    const mock = [
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />,
      <Offer
        firstName="Andrzej"
        lastName="Poniedzielski"
        description="Poszukuje poszukiwacza poszukiwań"
        phone="663883881"
        price="107"
      />
    ];

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
          {mock}
          <Pagination
            currentPage={this.props.page}
            totalItems={mock.length}
            handlePageChange={this.props.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
