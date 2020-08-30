import React from "react";
import Header from "./common/Header.js";
import "../public/MainToy.scss";

import Main from "./Main.js";
import Toy from "./Toy.js";

import { withRouter } from "react-router-dom";

const HomePage = ({ match }) => {
  const { category } = match.params;

  return (
    <>
      <Header />
      {category === "toy" ? <Toy /> : <Main />}
    </>
  );
};

export default withRouter(HomePage);
