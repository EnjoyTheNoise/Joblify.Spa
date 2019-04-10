import React from "react";
import "./Page.css";
import SingleOpinion from "../SingleOpinion/SingleOpinion";
import "../SingleOpinion/SingleOpinion.css";
import hammer from "./hammer.png";
const Page = () => {
  return (
    <div className="gridPage">
      <div id="top">
        <img src={hammer} className="hammer" />
        <button type="button" className="btn btn-primary btn-lg btnPos">
          Szukam pomocy
        </button>
        <button type="button" className="btn btn-primary btn-lg btnPos">
          Potrzebuję pomoc
        </button>
        <SingleOpinion />
        <SingleOpinion />
      </div>
    </div>
  );
};

export default Page;
