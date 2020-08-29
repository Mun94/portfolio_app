import React from "react";
import Header from "./common/Header.js";
import Main from "./Main.js";
import Toy from "./Toy.js";

import qs from "qs";
import { withRouter } from "react-router-dom";

const HomePage = ({ location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

  const toy = query.category === "toy";

  return (
    <>
      <Header />
      {toy ? <Toy /> : <Main />}
    </>
  );
};

export default withRouter(HomePage);
