import React from "react";
import avatarPlaceholder from "../../../assets/avatar-placeholder.png";
import "./Offer.css";

const Offer = props => {
  const fullName = props.firstName + " " + props.lastName;

  return (
    <div className="row offerResult">
      <div className="avatarWithStars">
        <figure>
          <img className="offerResultAvatar" src={avatarPlaceholder} />
          <figcaption>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </figcaption>
        </figure>
      </div>

      <div className="offerContent">
        <p>{fullName}</p>
        <p>{props.description}</p>
        <p>telefon: {props.phone}</p>
        <p>cena: {props.price}</p>
      </div>
    </div>
  );
};

export default Offer;

