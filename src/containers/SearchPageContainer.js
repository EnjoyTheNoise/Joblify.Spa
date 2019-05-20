import React, { Component } from "react";
import { getOffers } from "../actions/SearchPageActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage/SearchPage";

// const initialState = {
//   phrase: "",
//   option: "",
//   filter: "",
//   page: 0
// };

export class SearchPageContainer extends Component {
  constructor(props) {
    super(props);
    // this.state = initialState;
  }

  // componentDidMount = () => {
  // this.props.actions.getOffers();
  // };

  render() {
    const query = this.props.location.search;
    const { isFetching, offers } = this.props;

    const params = new URLSearchParams(query);
    const phrase = params.get("phrase");
    const option = params.get("option");
    const filter = params.get("filter");
    const page = params.get("page");

    console.log("isFetching:" + isFetching);
    console.log("offers:" + offers);
    console.log("phrase:" + phrase);
    console.log("option:" + option);
    console.log("filter:" + filter);
    console.log("page:" + page);

    return (
      <SearchPage
        isFetching={isFetching}
        offers={offers}
        phrase={phrase}
        option={option}
        filter={filter}
        page={page}
      />
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.searchPage.isFetching,
  offers: state.searchPage.offers,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getOffers }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer);
