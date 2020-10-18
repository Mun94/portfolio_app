import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Spacer = styled.div`
  border: 1px solid gray;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Index = ({ lists, name }) => {
  return (
    <div className="Block">
      <div className="Text">{name.toUpperCase()} 프로젝트</div>
      <div className="StyledImg">
        {lists.map((list) => (
          <div key={list.id}>
            <Link to={`/project/${name}/${list.name}`}>
              <img src={list.src} alt={list.name} />
            </Link>
            <Spacer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Index);
