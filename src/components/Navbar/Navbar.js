import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

class NavbarUnlogged extends Component {
  render() {
    const [
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

    const userName = "user123"; //it will change later
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <Link to="/" className="navbar-brand">
            {siteName}
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
              className="form-control mr-sm-2"
              type="search"
              placeholder="Szukaj"
              aria-label="Search"
              style={{ width: "400px" }}
            />
            <fieldset className="form-group  my-2 my-lg-0">
              <div className="form-check">
                <label className="form-check-label navbarTextExtension">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios1"
                    value="option1"
                  />
                  {employers}
                </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label navbarTextExtension">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="optionsRadios"
                    id="optionsRadios2"
                    value="option2"
                  />
                  {employees}
                </label>
              </div>
            </fieldset>
            <button
              className="btn btn-secondary mx-3 my-2 my-sm-2"
              type="submit"
            >
              {search}
            </button>
          </form>
          <button className="btn btn-secondary" type="button">
            {createOffer}
          </button>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userName}
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  {favorite}
                </a>
                <a className="dropdown-item" href="#">
                  {myOffers}
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href={routeToEditProfile}>
                  {editProfile}
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routeToLogin}>
                {login}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarUnlogged;
