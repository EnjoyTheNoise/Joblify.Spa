import React from "react";
import "./Photo.css";

const photo = props => {
  return (
    <div>
      <img className="Photo" alt={"Profile"} src={props.photoUrl} />
      <button className="Button"> upload new photo</button>
    </div>
  );
};

export default photo;
