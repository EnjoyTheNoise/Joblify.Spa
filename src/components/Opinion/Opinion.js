import React from "react";
import "./Opinion.css";
import avatarPlaceholder from "../../assets/avatar-placeholder.png";

const SingleOpinion = props => {
  let commentText = "";
  commentText = props.comment + "\n\t" + props.userName;

  return (
    <div className="form-group position">
      <img className="avatar" src={avatarPlaceholder} />
      <div className="comment" >
        {commentText}
      </div>
    </div>
  );
};

export default SingleOpinion;
