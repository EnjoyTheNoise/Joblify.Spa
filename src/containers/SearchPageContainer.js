import React, { Component } from "react";
import { getOffers } from "../actions/SearchPageActions";
import { getAllTrades } from "../actions/AddOfferAction";
import { getOfferById } from "../actions/ShowOfferAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage/SearchPage";

const initialState = {
  offers: [],
  trades: [],
  phrase: "",
  option: "",
  trade: "",
  filter: "stars",
  page: 1
};

export class SearchPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount = () => {
    this.props.actions.getAllTrades();
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
      phrase: this.props.searchPage.phrase,
      trade: this.state.trade
    });
  };

  render() {
    console.log(this.props.searchPage);
    const { isFetching, offers, phrase, filter, page, option, trades, trade } = this.props.searchPage;

    let tradesOptionItems;
    if (trades != null) {
      tradesOptionItems = trades.map(trade => 
        <option key={trade.id}>{trade.name}</option>
      );
    }


    return (
      <SearchPage
        isFetching={isFetching}
        offers={offers}
        phrase={phrase}
        option={option}
        filter={filter}
        trade={trade}
        page={page}
        trades={tradesOptionItems}
        handleFilterSelect={this.handleFilterSelect}
        handlePageChange={this.props.actions.getOffers}
        handleShowOffer={this.props.actions.getOfferById}
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
      getOffers, getAllTrades, getOfferById
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPageContainer);
