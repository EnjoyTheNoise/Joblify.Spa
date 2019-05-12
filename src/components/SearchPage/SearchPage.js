import React, { Component } from "react";
import "./SearchPage.css";
import Offer from "./Offer/Offer";

class SearchPage extends Component {
  state = {
    phrase: "",
    option: "",
    page: 0
  };

  render() {
    this.state.phrase = this.props.match.params.phrase;
    this.state.option = this.props.location.search.substring(8, 17);

    let option = "";
    if (this.state.option === "employers") option = "Pracodawcy";
    else option = "Pracobiorcy";


    return (
      <div className="row">
        <p className="phraseSearchPage">
          wyniki dla frazy: {this.state.phrase}
        </p>

        <form className="form-inline filter" style={{ clear: "left" }}>
          <div className="form-group">
            <label className="control-label filterDropboxLabel">{option}</label>
          </div>
          <div className="form-group">
            <select id="memoryType" className="form-control">
              <option value="stars" value="selected">
                wg ilości gwiazdek
              </option>
              <option value="price">wg ceny</option>
              <option value="date">wg daty utworzenia</option>
            </select>
          </div>
        </form>

        <div className="offers">
          <Offer
            firstName="Andrzej"
            lastName="Poniedzielski"
            description="Poszukuje poszukiwacza poszukiwań"
            phone="663883881"
            price="107"
          />
          <Offer
            firstName="Andrzej"
            lastName="Poniedzielski"
            description="Poszukuje poszukiwacza poszukiwań"
            phone="663883881"
            price="107"
          />
          <Offer
            firstName="Andrzej"
            lastName="Poniedzielski"
            description="Poszukuje poszukiwacza poszukiwań"
            phone="663883881"
            price="107"
          />
          <Offer
            firstName="Andrzej"
            lastName="Poniedzielski"
            description="Poszukuje poszukiwacza poszukiwań"
            phone="663883881"
            price="107"
          />
          <Offer
            firstName="Andrzej"
            lastName="Poniedzielski"
            description="Poszukuje poszukiwacza poszukiwań"
            phone="663883881"
            price="107"
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
