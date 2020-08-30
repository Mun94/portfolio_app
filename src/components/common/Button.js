import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Styled = css`
  background: gray;
  text-decoration: none;
  display: inline-flex;
  border: none;
  cursor: pointer;
  outline: none;
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  letter-spacing: 0.2rem;
  & + & {
    margin-left: 2rem;
  }
`;

const StyledButton = styled.button`
  ${Styled}
`;

const StyledLink = styled(Link)`
  ${Styled}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};
export default Button;
