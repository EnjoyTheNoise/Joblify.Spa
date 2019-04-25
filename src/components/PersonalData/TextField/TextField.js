import React from "react";
import "./TextField.css";
const TextField = props => {
  return (
    <form>
      <div className="form-group bc-color">
        <label htmlFor="exampleInputName">Email</label>
        <input
          className="form-control"
          id="email"
          value={props.email}
          disabled={true}
        />
        <label htmlFor="exampleInputName">Imię</label>
        <input
          className="form-control"
          id="firstName"
          defaultValue={props.firstName}
          onChange={props.firstNameHandler}
        />
        <label htmlFor="exampleInputName">Nazwisko</label>
        <input
          className="form-control"
          id="lastname"
          defaultValue={props.lastName}
          onChange={props.lastNameHandler}
        />
        <label htmlFor="exampleInputName">Numer Telefonu</label>
        <input
          className="form-control"
          id="phone"
          defaultValue={props.phone}
          onChange={props.phoneHandler}
        />
      </div>
    </form>
  );
};

export default TextField;
