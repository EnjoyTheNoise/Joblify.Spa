import React from "react";
import "./Page.css";
const TopPageHalf = props => {
  return (
    <div className="gridPage">
      <div id="top">        
       <div>{props.children}</div> 
      </div>
    </div>
  );
};

export default TopPageHalf;
