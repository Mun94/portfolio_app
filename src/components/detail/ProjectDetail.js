import React from "react";
import Button from "../common/Button.js";

import Hungref from "./project/Hungref.js";

import Calculator from "./project/Calculator.js";
import Movieapp from "./project/Movieapp.js";
import Newsapp from "./project/Newsapp.js";
import Paint from "./project/Paint.js";
import Rps from "./project/Rps.js";
import Todolist from "./project/Todolist.js";
import Weatherapp from "./project/Weatherapp.js";

import { withRouter } from "react-router-dom";

const renderSwitch = (type, history, location) => {
  switch (type) {
    case "hungref":
      return <Hungref />;
    case "calculator":
      return <Calculator />;
    case "movieapp":
      return <Movieapp />;
    case "newsapp":
      return <Newsapp />;
    case "paint":
      return <Paint />;
    case "rps":
      return <Rps />;
    case "todolist":
      return <Todolist />;
    case "weatherapp":
      return <Weatherapp />;
    default:
      return (
        <div>
          <h2>이 페이지는 존재하지 않습니다:</h2>
          <p>{location.pathname}</p>
          <Button onClick={() => history.push("/")}>홈으로</Button>
        </div>
      );
  }
};

const ProjectDetail = ({ match, history, location }) => {
  const { name } = match.params;

  return <>{renderSwitch(name, history, location)}</>;
};

export default withRouter(ProjectDetail);
