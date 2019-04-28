import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../BasicUserData/BasicUserData.css";

const Birthday = props => {
  const { birthday, birthdayOnChange } = props;
  const [dateFormat, birthdayLabel] = ["dd/MM/yyyy", "Data Urodzin"];
  return (
    <form>
      <div className="form-group">
        <label>{birthdayLabel}</label>
        <br />
        <DatePicker
          className="form-control"
          id="birthday"
          dateFormat={dateFormat}
          selected={birthday}
          onChange={birthdayOnChange}
        />
      </div>
    </form>
  );
};

export default Birthday;
