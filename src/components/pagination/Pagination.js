import React from "react";
import { Link, withRouter } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, name }) => {
  const pageNumbers = [];
  const category = name === "main" ? "main" : "toy";

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <Link to={`/project/${category}/?page=${pageNumber}`}>
              {pageNumber}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default withRouter(Pagination);
