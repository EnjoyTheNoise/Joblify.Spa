import React, { Component } from "react";
import { getUser, getUserOffers } from "../actions/UserActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/UserProfile";
import PropTypes from "prop-types";

export class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.actions.getUser("makao@xd.com");
    this.props.actions.getUserOffers(8);
  }

  render() {
    const { actions } = this.props;
    const {
      firstName,
      lastName,
      phoneNumber,
      birthdate,
      description,
      experience,
      fieldOfInterest,
      isFetching,
    } = this.props.getUser;

    console.log(this.props.getUser)
    console.log(this.props.getUserOffers)
    const { offers } = this.props.getUserOffers;

    return (
      <UserProfile
        isFetching={isFetching}
        phoneNumber={phoneNumber}
        birthdate={birthdate}
        experience={experience}
        userName={firstName + " " + lastName}
        description={description}
        fieldOfInterest={fieldOfInterest}
        actions={actions}
        offers={offers}
      />
    );
  }
}

const mapStateToProps = state => ({
  getUser: state.user,
  getUserOffers: state.offers
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getUser, getUserOffers }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);

UserProfileContainer.contextType = {
  router: PropTypes.object.isRequired
};
