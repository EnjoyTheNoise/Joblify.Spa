import React from "react";
import "./SingleOpinion.css";

const SingleOpinion = props => {
  return (
    <div className="form-group position">
      <img src={props.photoUrl} />
      <label>props.userName</label>
      <textarea
        className="form-control"
        id="exampleTextarea"
        rows="3"
        disabled="true"
      >
        props.comment
      </textarea>
    </div>
  );
};

export default SingleOpinion;
