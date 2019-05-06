import React, { Component } from "react";
import "../../App.js";
import "./AddOffer.css";
import axios from 'axios';
import {BASE_URL} from "../../constants.js"
import { getAllCategories, getAllTrades, postNewOffer} from "../../actions/addOfferAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddOffer extends Component {
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
    // axios.post(BASE_URL + "/offer/", offer) 
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => console.log(err));;
  }

  componentDidMount = () => {
    console.log(this.props.actions.getAllCategories(this.addOffer));
  
    console.log(this.props.actions.getAllTrades(this.addOffer));
  }
  render() {
    //const {categories1} = this.props.actions.getAllCategories(this.addOffer);//this.props;//.actions.getAllCategories();
  //  console.log(categories1);
    const categories = this.state.categories;
    let categoriesOptionItems = this.props.categories.map(category => 
      <option key={category.id}>{category.name}</option>
    );

    const trades = this.state.trades;
    let tradesOptionItems = this.props.trades.map(trade => 
      <option key={trade.id}>{trade.name}</option>
    );

    return (
      <div className="row">
        <div className="titleAddOffer">
          <h1>Nowa oferta</h1>
        </div>
        <br />
        <div className="col-sm-9 customForm">
          <form>
            <div className="form-group row">
              <label htmlFor="inputCategory" className="col-sm-2 col-form-label">
                Kategoria
              </label>
              <div className="col-sm-10">
                <select id="inputCategory" className="form-control">
                  <option value="" disabled selected>Wybierz kategorię</option>
                  {categoriesOptionItems}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputTrade" className="col-sm-2 col-form-label">
                Branża
              </label>
              <div className="col-sm-10">
                <select id="inputTrade" className="form-control">
                  <option value="" disabled selected>Wybierz branżę</option>
                  {tradesOptionItems}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputAvailableTime"
                className="col-sm-2 col-form-label"
              >
                Dostępny czas
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAvailableTime"
                  placeholder="Podaj czas usługi"
                  onChange={(event) => this.props.availableTime}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPrice" className="col-sm-2 col-form-label">
                Cena usługi
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputPrice"
                  placeholder="Podaj cenę usługi"
                  onChange={(event) => this.setState({price: event.target.value})}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputOfferTitle" className="col-sm-2 col-form-label">
                Tytuł oferty
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputOfferTitle"
                  placeholder="Podaj tytuł oferty"
                  onChange={(event) => this.setState({title: event.target.value})}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="inputDescription"
                className="col-sm-2 labelDescription"
              >
                Opis
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="inputDescription"
                  rows="10"
                  onChange={(event) => this.setState({description: event.target.value})}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="col-sm-12">
          <button onClick={this.postDataHandler} className="btn btn-primary saveOfferButton">Zapisz</button>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (AddOffer);
