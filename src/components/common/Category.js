import React from "react";
import styled from "styled-components";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = ({ match }) => {
  return (
    <CategoryBlock>
      {match.path.includes("project") ? (
        <Button to="/">Home</Button>
      ) : (
        <>
          <Button to="/">Main</Button>
          <Button to={`?category=toy`}>Toy</Button>
        </>
      )}
    </CategoryBlock>
  );
};

export default withRouter(Category);
