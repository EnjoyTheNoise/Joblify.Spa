import React from "react";
import "./SingleOpinion.css";
import avatarPlaceholder from "../../assets/avatar-placeholder.png";

const SingleOpinion = props => {
  let commentText = "";
  commentText = props.comment + "\n\t" + props.userName;

  return (
    <div className="form-group position">
      <img className="avatar" src={avatarPlaceholder} />
      <textarea
        className="form-control"
        id="exampleTextarea"
        rows="3"
        disabled="true"
        value={commentText}
      />
    </div>
  );
};

export default SingleOpinion;
