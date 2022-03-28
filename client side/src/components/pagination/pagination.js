import React from "react";
import { Link } from "react-router-dom";

export default function pagination(props) {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(props.totalCourses / props.postsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  };

  const nextPage = () => {
    props.setCurrentPage(props.currentPage + 1);
  };

  return (
    <nav className="d-flex justify-content-center align-items-center bg-white">
      <ul className="pagination bg-white mb-0 mt-3">
        <li
          className={`page-item  ${
            props.currentPage === 1 ? "disabled" : null
          } `}
          onClick={previousPage}
        >
          <Link className="page-link bg-primary mx-0" to="/courses">
            Previous
          </Link>
        </li>
        {pageNumbers.map((number, index) => {
          return (
            <li key={number} className="page-item">
              <Link
                onClick={() => props.paginate(number)}
                to="/courses"
                className="page-link bg-primary"
              >
                {number}
              </Link>
            </li>
          );
        })}

        <li
          className={`page-item ${ props.currentPage === pageNumbers.length  ? "disabled" : null} `}
        >
          <Link
            className="page-link bg-primary"
            to="/courses"
            onClick={nextPage}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
