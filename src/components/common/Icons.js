import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";

const IconsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 100%;
    border: 1px gray solid;
    padding: 0.2rem;
    background: rgba(0, 0, 0, 0.08);
    &:hover {
      background: yellow;
    }
  }
`;

const Icons = () => {
  return (
    <IconsBlock>
      <a
        href="https://github.com/Mun94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoMarkGithub size="27" />
      </a>
    </IconsBlock>
  );
};

export default Icons;
