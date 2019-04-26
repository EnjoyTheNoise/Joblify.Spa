import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Birthday = props => {
  const { birthday, birthdayOnChange } = props; 
  const [dateFormat,birthdayLabel] = ["dd/MM/yyyy", "Data Urodzin"];
  return (
    <div>
      <label>{birthdayLabel}</label>
      <br />
      <DatePicker
        id="birthday"
        dateFormat={dateFormat}
        selected={birthday}
        onChange={birthdayOnChange}
      />
    </div>
  );
};

export default Birthday;
