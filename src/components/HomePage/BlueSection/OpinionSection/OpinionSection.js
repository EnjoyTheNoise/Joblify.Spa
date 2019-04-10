import React from "react";

import SingleOpinion from "../../../SingleOpinion/SingleOpinion";

import "./OpinionSection.css";

const OpinionSection = props => {
  return (
    <div className="OpinionSection">
      <SingleOpinion
        comment="CSSy wcale nie dały mi depresji"
        userName="Szymon Bibuła"
      />
      <SingleOpinion comment="Fajne CSSy, 10/10" userName="Anna Futururu" />
      <SingleOpinion comment="Tududu Tududu" userName="Wonsz Rzeczny" />
    </div>
  );
};

export default OpinionSection;
