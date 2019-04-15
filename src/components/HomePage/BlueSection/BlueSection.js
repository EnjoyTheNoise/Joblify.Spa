import React, { Component } from "react";

import "./BlueSection.css";
import hammer from "../../../assets/arts-and-crafts-carpenter-carpentry-1972569.jpg";
import OpinionSection from "./OpinionSection/OpinionSection";

class BlueSection extends Component {
  render() {
    return (
      <div className="BlueSection">
        <img src={hammer} className="hammer" />
        <span className="buttonContainer">
          <button className="btn btn-primary offerButton">
            Potrzebuję pomocy
          </button>
          <button className="btn btn-primary offerButton">Oferuję pomoc</button>
        </span>
        <div className="blueSectionHeaderText">
          <h1>Dołącz do nas już dziś!</h1>
          <h3>Twórz z nami społeczność i wystawiaj gwiazdki</h3>
          <h3>Odetkaj kran i bd git ok</h3>
        </div>
        <OpinionSection />
        <div className="clear" />
      </div>
    );
  }
}

export default BlueSection;
