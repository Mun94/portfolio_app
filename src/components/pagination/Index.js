import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Spacer = styled.div`
  border: 1px solid gray;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  img {
    max-width: 550px;
    object-fit: fill;
    @media (max-width: 550px) {
      max-width: 360px;
    }
  }
`;

const Posts = React.memo(({ mainPosts, name }) => {
  if (!mainPosts) {
    return null;
  }
  return mainPosts.map((list) => (
    <div key={list.id}>
      <StyledLink to={`/project/${name}/${list.name}`}>
        <img src={list.src} alt={list.name} />
      </StyledLink>
      <Spacer />
    </div>
  ));
});

const ToyPosts = React.memo(({ toyPosts, name }) => {
  if (!toyPosts) {
    return null;
  }
  return toyPosts.map((list) => (
    <div key={list.id}>
      <StyledLink to={`/project/${name}/${list.name}`}>
        <img src={list.src} alt={list.name} />
      </StyledLink>
      <Spacer />
    </div>
  ));
});

const Index = ({ toyPosts, mainPosts, name }) => {
  if (name === "toy") {
    mainPosts = [];
  }
  return (
    <div className="Block">
      <div className="Text" style={{ textAlign: "center" }}>
        {name.toUpperCase()} 프로젝트
      </div>
      <div className="StyledImg">
        {name === "main" && <Posts mainPosts={mainPosts} name={name} />}
        {name === "toy" && <ToyPosts toyPosts={toyPosts} name={name} />}
      </div>
    </div>
  );
};

export default React.memo(Index);
