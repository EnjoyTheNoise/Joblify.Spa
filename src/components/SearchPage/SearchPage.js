import React, { Component } from "react";
import "./SearchPage.css";
import Offer from "./Offer/Offer";

class SearchPage extends Component {
  render() {
    let option = "";
    if (this.props.option === "employers") option = "Pracodawcy";
    else option = "Pracobiorcy";

    return (
      <div className="row">
        <p className="phraseSearchPage">
          wyniki dla frazy: {this.props.phrase}
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
          <Offer
            firstName="Mariusz"
            lastName="Piguła"
            description="Kurde czego ja poszukuje szczęścia ok xD"
            phone="6686838182"
            price="0"
          />

          <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a className="active" href="#">
              2
            </a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
