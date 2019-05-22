import React, { Component } from "react";
import {
  getOffers,
  handleFilterSelect,
  handlePageChange
} from "../actions/SearchPageActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage/SearchPage";

const initialState = {
  phrase: "",
  option: "",
  filter: "stars",
  page: 1
};

export class SearchPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // componentDidMount = () => {
  //   // this.props.actions.getOffers();
  //   console.log("Did mount: " + Date.now());
  // };

  componentDidMount = () => {
    this.props.actions.getOffers(1);
    console.log("Did update: " + Date.now());
  };

  render() {
    const { isFetching, offers, phrase, filter, page, option } = this.props;
    this.state.phrase = phrase;
    this.state.filter = filter;
    this.state.page = page;
    this.state.option = option;

    return (
      <SearchPage
        isFetching={isFetching}
        offers={offers}
        phrase={phrase}
        option={option}
        filter={filter}
        page={page}
        handleFilterSelect={this.props.actions.handleFilterSelect}
        handlePageChange={this.props.actions.getOffers}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.searchPage.isFetching,
  offers: state.searchPage.offers,
  phrase: state.searchPage.phrase,
  option: state.searchPage.option,
  filter: state.searchPage.filter,
  page: state.searchPage.page
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getOffers, handleFilterSelect, handlePageChange },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer);
