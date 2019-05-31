import React, { Component } from "react";
import { getUser } from "../actions/UserActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserProfile from "../components/UserProfile/UserProfile";
import PropTypes from "prop-types";

export class UserProfileContainer extends Component {
  componentDidMount() {
    this.props.actions.getUser("asdwsadsaa@wp.pl");
  }

  render() {
    const { actions } = this.props;
    const {
      firstName,
      lastName,
      phoneNumber ,
      birthdate ,
      description ,
      experience ,
      fieldOfInterest ,
      isFetching,
    } = this.props.getUser;
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
      />
    );
  }
}

const mapStateToProps = state => ({
  getUser: state.user
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getUser }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer);

UserProfileContainer.contextType = {
  router: PropTypes.object.isRequired
};
