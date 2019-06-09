import React, { Component } from "react";
import { getOffers } from "../actions/SearchPageActions";
import { getAllTrades } from "../actions/addOfferAction";
import { getOfferById } from "../actions/ShowOfferAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage/SearchPage";

const initialState = {
  offers: [],
  trades: [],
  phrase: "",
  category: "",
  trade: "All",
  orderBy: "price asc",
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

  handleOrderBySelect = e => {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);

    this.props.actions.getOffers({
      page: this.props.searchPage.page,
      category: this.props.searchPage.category,
      orderBy: this.state.orderBy,
      phrase: this.props.searchPage.phrase,
      trade: this.state.trade
    });
  };

  render() {
    //console.log(this.props.searchPage);
    const { isFetching, offers, phrase, orderBy, page, category, trades, trade } = this.props.searchPage;
    // const offers = this.props.searchPage.offers.foundOffers;

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
        category={category}
        orderBy={orderBy}
        trade={trade}
        page={page}
        trades={tradesOptionItems}
        handleOrderBySelect={this.handleOrderBySelect}
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
