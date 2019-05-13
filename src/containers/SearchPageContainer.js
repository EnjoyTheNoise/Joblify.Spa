import React, { Component } from "react";
import { getOffers } from "../actions/SearchPageActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import SearchPage from "../components/SearchPage/SearchPage";

const initialState = {
    phrase: '',
    option: '',
    page: 0
};

export class SearchPageContainer extends Component {
    constructor(props){
        super(props);
        this.state = initialState;
    }

    // componentDidMount = () => {
        // this.props.actions.getOffers();
    // };

    render() {
        const {isFetching, offers, page} = this.props;

        const phrase = this.props.match.params.phrase;
        const option = this.props.location.search.substring(8, 17);

        return(
            <SearchPage 
            isFetching = {isFetching}
            offers = {offers}
            phrase = {phrase}
            option = {option}
            page = {page}
            />
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.searchPage.isFetching,
    offers: state.searchPage.offers,
    phrase: state.searchPage.phrase,
    option: state.searchPage.option,
    page: state.searchPage.page
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({getOffers}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (SearchPageContainer);