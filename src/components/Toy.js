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

const Toy = () => {
  return (
    <div className="Block">
      <div className="Text">토이 프로젝트</div>
      <div className="StyledImg">
        <Link to="/project/toy/calculator">
          <img src={calculator} alt="calculator" />
        </Link>
        <ToySpacer />
        <Link to="/project/toy/todolist">
          <img src={todolist} alt="todolist" />
        </Link>
        <ToySpacer />
        <Link to="/project/toy/rps">
          <img src={rps} alt="rps" />
        </Link>
        <ToySpacer />
        <Link to="/project/toy/paint">
          <img src={paint} alt="paint" />
        </Link>
        <ToySpacer />
        <Link to="/project/toy/movieapp">
          <img src={movieapp} alt="movieapp" />
        </Link>
        <ToySpacer />
        <Link to="/project/toy/weatherapp">
          <img src={weatherapp} alt="weatherapp" />
        </Link>
        <ToySpacer />
        <Link to="/project/toy/newsapp">
          <img src={newsapp} alt="newsapp" />
        </Link>
        <ToySpacer />
      </div>
    </div>
  );
};

export default Toy;
