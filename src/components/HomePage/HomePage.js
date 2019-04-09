import React, { Component } from "react";
import "../../App.css";
import Page from "./Page"
import SingleOpinion from "../SingleOpinion";

class HomePage extends Component {
  render() {
    return (
      <Page>
      <SingleOpinion/>
      </Page>
    );
  }
}

export default HomePage;
