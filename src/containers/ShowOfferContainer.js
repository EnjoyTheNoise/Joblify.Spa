import React, { Component } from "react";
import { getOfferById } from "../actions/ShowOfferAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Offer from "../components/Offer/Offer";
import PropTypes from "prop-types";

export class OfferContainer extends Component {
  componentDidMount() {
    this.props.actions.getOfferById(this.props, 1);
  }

  onSubmit = e => {
    e.preventDefault();

    // to implement
    //this should go to view with user details
  };

  render() {
    const { actions } = this.props;
    const {
      isFetching,
      title,
      description,
      price,
      availableTime,
      userId,
      firstName,
      lastName
    } = this.props.getOfferById;
    return (
      <Offer
        isFetching={isFetching}
        availableTime={availableTime}
        price={price}
        title={title}
        userId={userId}
        userName={firstName + " " + lastName}
        description={description}
        actions={actions}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  getOfferById: state.getOffer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getOfferById }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferContainer);

OfferContainer.contextType = {
  router: PropTypes.object.isRequired
};
