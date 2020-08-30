import React from "react";
import { Route, Switch } from "react-router-dom";
import Button from "./components/common/Button";

import HomePage from "./components/HomePage.js";
import ProjectDetail from "./components/detail/ProjectDetail.js";

function App() {
  return (
    <>
      <Switch>
        <Route path={["/project/:category", "/"]} component={HomePage} exact />
        <Route path="/project/:category/:name" component={ProjectDetail} />

        <Route
          render={({ location, history }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
              <Button onClick={() => history.push("/")}>홈으로</Button>
            </div>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
