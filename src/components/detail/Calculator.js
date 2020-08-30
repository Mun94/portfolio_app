import React from "react";
import styled from "styled-components";
import Header from "../common/Header.js";

const CalculatorBlock = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Contents = styled.div``;

const Title = styled.div`
  text-align: center;
  letter-spacing: 0.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  margin-bottom: 1rem;
`;

const LinkTo = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    background: gray;
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
    border-radius: 4px;
    padding: 0.25rem 1rem;
    letter-spacing: 0.2rem;
  }
`;

const Calculator = () => {
  return (
    <>
      <Header />
      <CalculatorBlock>
        <Contents>
          <Title>Calculator</Title>
          <Description>프로젝트 설명</Description>
          <LinkTo>
            <div>
              <a
                href="https://mun94.github.io/Basic-calculator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                이용하기
              </a>
            </div>
            <hr />
            <div>
              <a
                href="https://github.com/Mun94/Basic-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                코드보기
              </a>
            </div>
          </LinkTo>
        </Contents>
      </CalculatorBlock>
    </>
  );
};

export default Calculator;
