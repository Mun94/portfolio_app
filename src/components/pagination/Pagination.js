import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
import Button from '../common/Button.js';

const Ul = styled.ul`
  display:flex;
  justify-content:center;
  list-style:none;
  padding-left: 0;
  a{
    text-decoration:none;
  }
  li+li{
    margin-left:1rem;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, name }) => {
  const pageNumbers = [];
  const category = name === "main" ? "main" : "toy";

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <Link to={`/project/${category}/?page=${pageNumber}`}>
            <Button>
            {pageNumber}
            </Button>
            </Link>
          </li>
        ))}
      </Ul>
    </>
  );
};

export default React.memo(withRouter(Pagination));
