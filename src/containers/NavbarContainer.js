import React, { Component } from "react";
import { getOffers } from "../actions/SearchPageActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/Navbar";

export class NavbarUnloggedContainer extends Component {
  state = {
    phrase: "",
    category: "employers",
    filter: "stars",
    trade: "all"
  };

  handlePhraseInput = e => {
    let state = this.state;
    state["phrase"] = e.target.value;
    this.setState(state);
  };

  handleCategoryInput = e => {
    let state = this.state;
    state["category"] = e.target.value;
    this.setState(state);
  };

  render() {
    return (
      <Navbar handlePhraseInput={this.handlePhraseInput} handleCategoryInput={this.handleCategoryInput} getOffers={this.props.actions.getOffers} phrase={this.state.phrase} category={this.state.category} filter={this.state.filter} trade={this.state.trade} />
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
  