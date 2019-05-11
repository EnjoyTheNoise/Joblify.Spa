import React, { Component } from "react";
import "./SearchPage.css";
import Offer from "./Offer/Offer";

class SearchPage extends Component {
  state = {
     phrase: 'witam',
     option: 'Pracodawcy',
     page: 0
  }

  render() {
      
    return (
      <div className="row">
        <p className="pharseSearchPage">wyniki dla frazy: {this.state.phrase}</p>  

        <form className="form-inline filter" style={{clear:'left'}}>
            <div className="form-group">
                <label className="control-label filterDropboxLabel">{this.state.option}</label>
            </div>
            <div className="form-group">
                <select id="memoryType" className="form-control">
                    <option value="stars" value="selected">wg ilości gwiazdek</option>
                    <option value="price">wg ceny</option>
                    <option value="date">wg daty utworzenia</option>
                </select>
            </div>
        </form>

        <div className="offers">
            <Offer firstName="Andrzej" lastName="Poniedzielski" description="Poszukuje poszukiwacza poszukiwań" phone="663883881" price="107" />
            <Offer firstName="Andrzej" lastName="Poniedzielski" description="Poszukuje poszukiwacza poszukiwań" phone="663883881" price="107" />
            <Offer firstName="Andrzej" lastName="Poniedzielski" description="Poszukuje poszukiwacza poszukiwań" phone="663883881" price="107" />
            <Offer firstName="Andrzej" lastName="Poniedzielski" description="Poszukuje poszukiwacza poszukiwań" phone="663883881" price="107" />
            <Offer firstName="Andrzej" lastName="Poniedzielski" description="Poszukuje poszukiwacza poszukiwań" phone="663883881" price="107" />
        
        </div>
      </div>
    );
  }
}

export default SearchPage;
