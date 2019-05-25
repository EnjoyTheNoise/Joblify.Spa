import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    let pagesToRender = [];
    
    const{ startPage, currentPage, endPage, totalPages } = this.props;

    // TODO: 2 komponent renderowany jest 2 razy (przez <a> (?))
    console.log("CURRENT PAGE: " + currentPage);
    for (let i = startPage; i <= endPage; i++) {
      let k = i === currentPage ? <a className="active">{i}</a> : <a onClick={() => this.props.handlePageChange({page: i, phrase: this.props.phrase, filter: this.props.filter, option: this.props.option})}>{i}</a>;
      pagesToRender.push(k);
    }

    return (
      <div className="pagination">
        {currentPage-1 < 1 ? <a>&laquo;</a> : <a onClick={() => this.props.handlePageChange({page: currentPage-1, phrase: this.props.phrase, filter: this.props.filter, option: this.props.option})}>&laquo;</a>}
        {pagesToRender}
        {currentPage+1 > totalPages ? <a>&raquo;</a> : <a onClick={() => this.props.handlePageChange({page: currentPage+1, phrase: this.props.phrase, filter: this.props.filter, option: this.props.option})}>&raquo;</a>}
      </div>
    );
  }
}

export default Pagination;
