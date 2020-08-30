import React from "react";
import styled from "styled-components";
import Button from "./Button.js";
import { withRouter } from "react-router-dom";

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = ({ match, history }) => {
  const activeStyle = {
    background: "yellow",
    color: "white",
  };

  return (
    <CategoryBlock>
      {match.params.name ? (
        <Button onClick={() => history.goBack()}>Back</Button>
      ) : (
        <>
          <Button activeStyle={activeStyle} to="/project/main">
            Main
          </Button>
          <Button activeStyle={activeStyle} to="/project/toy">
            Toy
          </Button>
        </>
      )}
    </CategoryBlock>
  );
};

export default withRouter(Category);
