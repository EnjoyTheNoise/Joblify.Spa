import React from "react";
import "./Page.css";
import SingleOpinion from "../SingleOpinion";
const TopPageHalf = props => {
  return (
    <div className="gridPage">
      <div id="top">
        <SingleOpinion />
      </div>
    </div>
  );
};

export default TopPageHalf;
