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

const Index = ({ toyPosts, mainPosts, name }) => {
  return (
    <div className="Block">
      <div className="Text" style={{ textAlign: "center" }}>
        {name.toUpperCase()} 프로젝트
      </div>
      <div className="StyledImg">
        {name === "main"
          ? mainPosts.map((list) => (
              <div key={list.id}>
                <StyledLink to={`/project/${name}/${list.name}`}>
                  <img src={list.src} alt={list.name} />
                </StyledLink>
                <Spacer />
              </div>
            ))
          : toyPosts.map((list) => (
              <div key={list.id}>
                <StyledLink to={`/project/${name}/${list.name}`}>
                  <img src={list.src} alt={list.name} />
                </StyledLink>
                <Spacer />
              </div>
            ))}
      </div>
    </div>
  );
};

export default React.memo(Index);
