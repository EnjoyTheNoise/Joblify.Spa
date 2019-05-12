import React, { Component } from "react";
import { getAllCategories, getAllTrades, postNewOffer} from "../actions/addOfferAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AddOffer from "../components/Offer/AddOffer";

const initialState = {
  title: "",
  description: "",
  price: "",
  categoryId: "",
  tradeId: "",
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
          userId: 2002,
          title: this.state.title,
          description: this.state.description,
          price: this.state.price,
          categoryId: this.state.categoryId,
          tradeId: this.state.tradeId,
          availableTime: this.state.availableTime
         
        }
        console.log(this.props.availableTime);
        this.props.actions.postNewOffer(
          this.state.offer
        )
        
      }

      handleUserInput = e => {
        // const newState = this.state.cos;
        // newState[e.target.name] = e.target.value;
        // this.setState({
        //   cos: newState
        //})
        let state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        // this.setState({ [e.target.name]: e.target.value });
    
    };

      render() {
        const {isFetching, categories, trades, availableTime, price, title, description, tradeId, categoryId, actions} = this.props;
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
          />
        );
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
