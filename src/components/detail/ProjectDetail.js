import React from "react";
import Button from "../common/Button.js";

// main
import Cucook from "./project/Cucook.js";

// toy
import SandBox from "./project/SandBox.js";
import Wootube from "./project/Wootube.js";
import Birdgame from "./project/Birdgame";
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
    case "sandbox":
      return <SandBox />;
    case "cucook":
      return <Cucook />;
    case "wootube":
      return <Wootube />;
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
    case "birdgame":
      return <Birdgame />;
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

export default React.memo(withRouter(ProjectDetail));
