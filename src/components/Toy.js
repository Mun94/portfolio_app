import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import calculator from "../Img/calculator.PNG";
import todolist from "../Img/todolist.PNG";
import rps from "../Img/rps.PNG";
import paint from "../Img/paint.PNG";
import movieapp from "../Img/movieapp.PNG";
import weatherapp from "../Img/weatherapp.jpg";
import newsapp from "../Img/newsapp.PNG";

const ToySpacer = styled.div`
  border: 1px solid gray;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const lists = [
  {
    src: todolist,
    name: "todolist",
  },
  {
    src: calculator,
    name: "calculator",
  },
  {
    src: rps,
    name: "rps",
  },
  {
    src: paint,
    name: "paint",
  },
  {
    src: movieapp,
    name: "movieapp",
  },
  {
    src: weatherapp,
    name: "weatherapp",
  },
  {
    src: newsapp,
    name: "newsapp",
  },
];

const Toy = () => {
  return (
    <div className="Block">
      <div className="Text">토이 프로젝트</div>
      <div className="StyledImg">
        {lists.map((list) => (
          <div key={list.name}>
            <Link to={`/project/toy/${list.name}`}>
              <img src={list.src} alt={list.name} />
            </Link>
            <ToySpacer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toy;
