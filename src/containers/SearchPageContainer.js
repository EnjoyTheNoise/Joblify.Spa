import React, { Component } from "react";
import { getOffers } from "../actions/SearchPageActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage/SearchPage";

const initialState = {
  offers: [],
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

    console.log("Fraza" + this.state.phrase);

    this.props.actions.getOffers({
      page: this.props.searchPage.page,
      option: this.props.searchPage.option,
      filter: this.state.filter,
      phrase: this.props.searchPage.phrase
    });
  };

  render() {
    console.log(this.props.searchPage);
    const { isFetching, offers, phrase, filter, page, option } = this.props.searchPage;

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
  searchPage: state.searchPage,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getOffers
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer);
