import React from "react";

import Opinion from "../../../Opinion/Opinion";

import "./OpinionSection.css";

const OpinionSection = props => {
  return (
    <div className="OpinionSection">
      <Opinion comment="CSSy wcale nie dały mi depresji" userName="Szymon Bibuła" />
      <Opinion comment="Fajne CSSy, 10/10" userName="Anna Futururu" />
      <Opinion comment="Tududu Tududu" userName="Wonsz Rzeczny" />
    </div>
  );
};

export default OpinionSection;
