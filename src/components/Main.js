import React from "react";
import hungref from "../Img/hungref.PNG";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="Block">
      <div className="Text">메인 프로젝트</div>
      <div className="StyledImg">
        <Link to="/project/main/hungref">
          <img src={hungref} alt="hungref" />
        </Link>
      </div>
    </div>
  );
};

export default Main;
