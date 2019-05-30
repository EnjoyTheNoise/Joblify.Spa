import React, { Component } from "react";
import Pagination from "../components/SearchPage/Pagination/Pagination";

class PaginationContainer extends Component {
  render() {
    const pageSize = 10;
    const currentPage = parseInt(this.props.currentPage);
    //const totalItems = 200; //to test if pagination works.
    const totalItems = parseInt(this.props.totalItems);
    const totalPages = Math.ceil(totalItems / pageSize);
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

    return (
      <Pagination
        handlePageChange={this.props.handlePageChange}
        phrase={this.props.phrase}
        option={this.props.option}
        filter={this.props.filter}
        startPage={startPage}
        endPage={endPage}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    );
  }
}

export default PaginationContainer;
