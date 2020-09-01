import React, { Suspense } from "react";
import Header from "./common/Header.js";
import "../public/MainToy.scss";
import { withRouter } from "react-router-dom";
import Main from "./Main.js";
const SplitToy = React.lazy(() => import("./Toy.js"));

const HomePage = ({ match }) => {
  const { category } = match.params;

  return (
    <>
      <Header />
      {category === "toy" ? (
        <Suspense fallback={<div>이미지 로딩중 입니다..</div>}>
          <SplitToy />
        </Suspense>
      ) : (
        <Main />
      )}
    </>
  );
};

export default withRouter(HomePage);
