import React from "react";
import ReactPaginate from "react-paginate";

import "./style.css";

const Pagination = ({ total, size, onPageChange }) => {
  const pageCount = Math.ceil(total / size);
  return (
    <div >
      <ReactPaginate
        breakLabel="..."
        nextLabel="&raquo;"
        pageCount={pageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={size}
        previousLabel="&laquo;"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName=""
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
      />
    </div>
  );
};

export default Pagination;
