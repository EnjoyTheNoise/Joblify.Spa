import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchOffers } from "../../actions/SearchPageActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../../App.css";

class NavbarUnlogged extends Component {
  state = {
    phrase: "",
    option: "employers"
  };

  render() {
    const [
      routeToSearchPage,
      routeToEditProfile,
      routeToLogin,
      siteName,
      employers,
      employees,
      search,
      createOffer,
      favorite,
      myOffers,
      editProfile,
      login
    ] = [
      "/search",
      "/edit-profile",
      "/login",
      "Joblify",
      "Pracodawcy",
      "Pracobiorcy",
      "Szukaj",
      "Stwórz ofertę",
      "Ulubione",
      "Moje oferty",
      "Edytuj profil",
      "Login"
    ];

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <Link to="/" className="navbar-brand">
            Joblify
          </Link>
        </a>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline ml-auto my-2 my-lg-0">
            <input
              id="searchBar"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Szukaj"
              aria-label="Search"
              style={{ width: "400px" }}
              onChange={event => this.setState({ phrase: event.target.value })}
            />
            <fieldset className="form-group  my-2 my-lg-0">
              <div className="form-check">
                <label className="form-check-label navbarTextExtension">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios1"
                    value="employers"
                    defaultChecked
                    onChange={event =>
                      this.setState({ option: event.target.value })
                    }
                  />
                  Pracodawcy
                </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label navbarTextExtension">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="employees"
                    onChange={event =>
                      this.setState({ option: event.target.value })
                    }
                  />
                  Pracobiorcy
                </label>
              </div>
            </fieldset>
            <Link
              className="nav-link"
              to={{
                pathname: routeToSearchPage
              }}
            >
              <button
                className="btn btn-secondary mx-3 my-2 my-sm-2"
                type="submit"
                onClick={() =>
                  this.props.actions.searchOffers(
                    this.state.phrase,
                    this.state.option
                  )
                }
              >
                Szukaj
              </button>
            </Link>
          </form>
          <button className="btn btn-secondary" type="button">
            Stwórz ofertę
          </button>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                user123
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Ulubione
                </a>
                <a className="dropdown-item" href="#">
                  Moje Oferty
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Edytuj Profil
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ searchOffers }, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(NavbarUnlogged);
