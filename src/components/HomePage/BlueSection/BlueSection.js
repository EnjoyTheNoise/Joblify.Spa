import React, { Component } from "react";

import "./BlueSection.css";
import hammer from "../../../assets/arts-and-crafts-carpenter-carpentry-1972569.jpg";
import OpinionSection from "./OpinionSection/OpinionSection";

class BlueSection extends Component {
  render() {
    return (
      <div className="BlueSection">
        <div className="row">
          <div className="col-sm-4 mb20">
            <img src={hammer} className="hammer" />
          </div>
          <div className="col-sm-8 mb20">
            <div className="blueSectionHeaderText">
              <h1>Dołącz do nas już dziś!</h1>
            </div>
            <br />

            <div className="row">
              <div className="col-sm-12 mb20 blueSectionHeaderText">
                <h3>Twórz z nami społeczność i wystawiaj gwiazdki</h3>
                <h3>Odetkaj kran i bd git ok</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-7 mb20 buttonContainer">
                <button className="btn btn-primary offerButton">
                  Potrzebuję pomocy
                </button>
                <button className="btn btn-primary offerButton">
                  Oferuję pomoc
                </button>
              </div>
              <div className="col-sm-5 mb20">
                <OpinionSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlueSection;
