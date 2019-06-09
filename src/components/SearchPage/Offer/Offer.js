import React, { Component } from "react";
import avatarPlaceholder from "../../../assets/avatar-placeholder.png";
import "./Offer.css";

class Offer extends Component {
  render() {
    const maxStars = 5;
    let starsToRender = [];
    for (let i = 0; i < maxStars; i++) {
      let k = i < this.props.rating ? <span>★</span> : <span>☆</span>;
      starsToRender.push(k);
    }

    return (
      <div className="row offerResult">
        <div className="avatarWithStars">
          <figure>
            <img className="offerResultAvatar" src={avatarPlaceholder} />
            <figcaption>
              {starsToRender}
            </figcaption>
          </figure>
        </div>

        <div className="offerContent">
          <p>{this.props.firstName}</p>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Offer;
