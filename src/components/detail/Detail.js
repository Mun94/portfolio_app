import React from "react";
import styled from "styled-components";
import Header from "../common/Header.js";
import { withRouter } from "react-router-dom";

const DetailBlock = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
`;

const Contents = styled.div``;

const Title = styled.div`
  text-align: center;
  letter-spacing: 0.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Description = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkTo = styled.div`
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    background: gray;
    color: black;
    font-weight: bold;
    font-size: 0.8rem;
    border-radius: 4px;
    padding: 0.25rem 1rem;
    letter-spacing: 0.2rem;
    &:hover {
      background: yellow;
      color: white;
    }
  }
  a + a {
    margin-left: 1rem;
  }
`;

const data = {
  main: {
    cucook: {
      href1: "http://www.cucook.net:3000/",
      href2: "https://github.com/noryangjin",
    },
  },
  toy: {
    sandbox: {
      href1:
        "http://ec2-13-125-32-104.ap-northeast-2.compute.amazonaws.com:3000/",
      href2: "https://github.com/Mun94/SandBox/",
    },
    wootube: {
      href1: "https://hidden-earth-27978.herokuapp.com/",
      href2: "https://github.com/Mun94/wootube/",
    },
    calculator: {
      href1: "https://mun94.github.io/Basic-calculator/",
      href2: "https://github.com/Mun94/Basic-calculator",
    },
    birdgame: {
      href1: "https://mun94.github.io/Bird-game/",
      href2: "https://github.com/Mun94/Bird-game",
    },
    movieapp: {
      href1: "https://mun94.github.io/movie_app/",
      href2: "https://github.com/Mun94/movie_app",
    },
    newsapp: {
      href1: "https://mun94.github.io/news-viewer/",
      href2: "https://github.com/Mun94/news-viewer",
    },
    paint: {
      href1: "https://mun94.github.io/JS-Paint/",
      href2: "https://github.com/Mun94/JS-Paint",
    },
    rps: {
      href1: "https://mun94.github.io/Rock-Paper-Scissors/",
      href2: "https://github.com/Mun94/Rock-Paper-Scissors",
    },
    todolist: {
      href1: "https://mun94.github.io/JS-ToDoList/",
      href2: "https://github.com/Mun94/JS-ToDoList",
    },
    weatherapp: {
      href1: "https://expo.io/@danggu/weather_app",
      href2: "https://github.com/Mun94/weather-app",
    },
  },
};

const Detail = ({ match, children }) => {
  const { category, name } = match.params;
  const { href1, href2 } = data[category][name];

  return (
    <>
      <Header />
      <DetailBlock>
        <Contents>
          <Title>
            {category}-{name}
          </Title>
          <Description>{children}</Description>
          <LinkTo>
            <a href={href1} target="_blank" rel="noopener noreferrer">
              이용하기
            </a>
            <a href={href2} target="_blank" rel="noopener noreferrer">
              코드보기
            </a>
          </LinkTo>
        </Contents>
      </DetailBlock>
    </>
  );
};

export default React.memo(withRouter(Detail));
