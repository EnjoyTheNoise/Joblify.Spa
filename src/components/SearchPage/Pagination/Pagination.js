import React, { Component } from "react";
import "./Pagination.css";

class Pagination extends Component {
  render() {
    let pagesToRender = [];
    
    const{ startPage, currentPage, endPage, totalPages } = this.props;
    
    console.log("CURRENT PAGE: " + currentPage);
    for (let i = startPage; i <= endPage; i++) {
      let k = i === currentPage ? <p className="active">{i}</p> : <p onClick={() => this.props.handlePageChange({page: i, phrase: this.props.phrase, orderBy: this.props.orderBy, categorys: this.props.category})}>{i}</p>;
      pagesToRender.push(k);
    }

    return (
      <div className="pagination">
        {currentPage-1 < 1 ? <p>&laquo;</p> : <p onClick={() => this.props.handlePageChange({page: currentPage-1, phrase: this.props.phrase, orderBy: this.props.orderBy, category: this.props.category})}>&laquo;</p>}
        {pagesToRender}
        {currentPage+1 > totalPages ? <p>&raquo;</p> : <p onClick={() => this.props.handlePageChange({page: currentPage+1, phrase: this.props.phrase, orderBy: this.props.orderBy, category: this.props.category})}>&raquo;</p>}
      </div>
    );
  }
}

export default Pagination;
