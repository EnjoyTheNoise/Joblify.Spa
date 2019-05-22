import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    const currentPage = parseInt(this.props.currentPage);
    const totalItems = parseInt(this.props.totalItems);
    const pageSize = 10;
    const totalPages = Math.ceil(totalItems / pageSize);
    let table = [];
    let startPage, endPage;

    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      let k =
        i === currentPage ? (
          <a className="active">{i}</a>
        ) : (
          <a onClick={() => this.props.handlePageChange(i)}>{i}</a>
        );
      table.push(k);
    }

    return (
      <div className="pagination">
        <a href="#">&laquo;</a>
        {table}
        <a href="#">&raquo;</a>
      </div>
    );
  }
}

export default Pagination;
