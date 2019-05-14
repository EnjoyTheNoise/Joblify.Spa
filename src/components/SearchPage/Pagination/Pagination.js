import React from "react";
import "./Pagination.css";

const Pagination = props => {
  const currentPage = props.currentPage;

  const a = (
    <div className="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a className="active" href="#">
        {currentPage}
      </a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  );

  return a;
};

export default Pagination;
