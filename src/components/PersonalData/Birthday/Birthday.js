import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Birthday = props => {
  return (
    <div>
      <label htmlFor="exampleInputName">Data Urodzin</label>
      <br />
      <DatePicker
        
        id="birthday"
        dateFormat="dd/MM/yyyy"
        selected={props.birthday}
        onChange={props.birthdayHandler}
      />
    </div>
  );
};

export default Birthday;
