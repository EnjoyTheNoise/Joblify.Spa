import React, { Component } from "react";
import { getOffers } from "../actions/SearchPageActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/Navbar";

export class NavbarUnloggedContainer extends Component {
  state = {
    phrase: "",
    option: "employers",
    filter: "stars",
    trade: "all"
  };

  handlePhraseInput = e => {
    let state = this.state;
    state["phrase"] = e.target.value;
    this.setState(state);
  };

  handleOptionInput = e => {
    let state = this.state;
    state["option"] = e.target.value;
    this.setState(state);
  };

  render() {
    return (
      <Navbar handlePhraseInput={this.handlePhraseInput} handleOptionInput={this.handleOptionInput} getOffers={this.props.actions.getOffers} phrase={this.state.phrase} option={this.state.option} filter={this.state.filter} trade={this.state.trade} />
    );
  }
}

const mapStateToProps = state => ({
    filter: state.searchPage.filter,
  });
  
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ getOffers }, dispatch)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavbarUnloggedContainer);
  