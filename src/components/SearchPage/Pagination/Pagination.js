import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    const currentPage = parseInt(this.props.currentPage);
    const totalItems = parseInt(this.props.totalItems);
    const pageSize = 10;
    const totalPages = Math.ceil(totalItems / pageSize);
    let startPage, endPage;
    let pagesToRender = [];

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

    console.log("CURRENT PAGE: " + currentPage);
    for (let i = startPage; i <= endPage; i++) {
      let k = i === currentPage ? <a className="active">{i}</a> : <a onClick={() => this.props.handlePageChange({page: i})}>{i}</a>;
      pagesToRender.push(k);
    }

    return (
      <div className="pagination">
        {currentPage-1 < 1 ? <a>&laquo;</a> : <a onClick={() => this.props.handlePageChange({page: currentPage-1})}>&laquo;</a>}
        {pagesToRender}
        {currentPage+1 > totalPages ? <a>&raquo;</a> : <a onClick={() => this.props.handlePageChange({page: currentPage+1})}>&raquo;</a>}
      </div>
    );
  }
}

export default Pagination;
