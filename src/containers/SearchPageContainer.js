import React, { Component } from "react";
import {
  getOffers,
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

  handleFilterSelect = e => {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);

    this.props.actions.getOffers({
      page: this.state.page,
      option: this.state.option,
      filter: this.state.filter,
      phrase: this.state.phrase
    });
  };
  
  componentDidMount = () => {
    this.props.actions.getOffers({
      page: this.state.page,
      option: this.state.option,
      filter: this.state.filter,
      phrase: this.state.phrase
    });
    console.log("Did mount: " + Date.now());
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
        handleFilterSelect={this.handleFilterSelect}
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
    {
      getOffers,
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer);
