import React from "react";
import styled from "styled-components";
import hungref from "./Img/hungref.PNG";
import { Link } from "react-router-dom";

const MainBlock = styled.div`
  a {
    display: flex;
    justify-content: center;
  }
`;

const StyledImg = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Main = () => {
  return (
    <MainBlock>
      <Text>메인 프로젝트</Text>
      <StyledImg>
        <Link to="/project/hungref">
          <img src={hungref} alt="hungref" />
        </Link>
      </StyledImg>
    </MainBlock>
  );
};

export default Main;
