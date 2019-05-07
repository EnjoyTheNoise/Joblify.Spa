import React, { Component } from "react";
import { getAllCategories, getAllTrades, postNewOffer} from "../actions/addOfferAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export class AddOfferContainer extends Component {
    state = {
        title: '',
        description: '',
        price: '',
        categoryId: '',
        tradeId: '',
        availableTime: ''
      }
    
      postDataHandler = () => {
        const offer = {
          //userId value for tests
          userId: 2002,
          title: this.state.title,
          description: this.state.description,
          price: this.state.price,
          categoryId: this.state.categoryId,
          tradeId: this.state.tradeId,
          availableTime: this.state.availableTime
        }
        console.log(this.props.actions.postNewOffer(this.addOffer));
      }
}

const mapStateToProps = state => ({
    isFetching: state.addOffer.isFetching,
    categories: state.addOffer.categories,
    trades: state.addOffer.trades,
    availableTime: state.addOffer.availableTime,
    price: state.addOffer.price,
    title: state.addOffer.title,
    description: state.addOffer.description,
    tradeId: state.addOffer.tradeId,
    categoryId: state.addOffer.categoryId
  });
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({getAllCategories, getAllTrades, postNewOffer}, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps) (AddOfferContainer);
