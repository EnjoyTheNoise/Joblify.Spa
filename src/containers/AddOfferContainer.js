import React, { Component } from "react";
import { getAllCategories, getAllTrades, postNewOffer} from "../actions/addOfferAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddOffer from "../components/Offer/AddOffer";
import axios from "axios";
import { BASE_URL } from "../constants";

const initialState = {
  title: "",
  description: "",
  price: 0,
  categoryId: 0,
  tradeId: 0,
  availableTime: ""
};

export class AddOfferContainer extends Component {
   constructor(props) {
     super(props);
     this.state = initialState;
   }
   componentDidMount = () => {
    this.props.actions.getAllCategories();
  
    this.props.actions.getAllTrades();
  }
      onSubmit = e => {
        e.preventDefault();
        const offer = {
          //userId value for tests
          userId: 5,
          title: this.state.title,
          description: this.state.description,
          price: this.state.price,
          categoryId: this.state.categoryId,
          tradeId: this.state.tradeId,
          availableTime: this.state.availableTime        
        }

        this.props.actions.postNewOffer(
         offer 
        )       
      }

      handleUserInput = e => {
        let state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);    
    };

    handleUserSelect = e => {
      let state = this.state;
      state[e.target.name] = e.target.selectedIndex;
      this.setState(state);
    }

      render() {
        const {isFetching, categories, trades, actions} = this.props;
        const { price, title, description, tradeId, categoryId, availableTime} = this.state;
        return (
          <AddOffer
          isFetching = {isFetching}
          categories = {categories}
          trades = {trades}
          availableTime = {availableTime}
          price = {price}
          title = {title}
          description = {description}
          tradeId = {tradeId}
          categoryId = {categoryId}
          actions = {actions}
          onSubmit = {this.onSubmit}
          handleUserInput = {this.handleUserInput}
          handleUserSelect = {this.handleUserSelect}
          />
        );
      }
}

const mapStateToProps = state => ({
    isFetching: state.addOffer.isFetching,
    categories: state.addOffer.categories,
    trades: state.addOffer.trades,
  });
  
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({getAllCategories, getAllTrades, postNewOffer}, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps) (AddOfferContainer);
