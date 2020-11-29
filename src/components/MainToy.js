import React, { useState, Suspense, useEffect } from "react";
import { withRouter } from "react-router-dom";
import qs from "qs";
import Pagination from "./pagination/Pagination.js";

// main img
import sandbox from '../Img/sandbox.PNG';
import hungref from "../Img/hungref.PNG";

// toy img
import wootube from '../Img/wootube.PNG';
import calculator from "../Img/calculator.PNG";
import todolist from "../Img/todolist.PNG";
import rps from "../Img/rps.PNG";
import paint from "../Img/paint.PNG";
import movieapp from "../Img/movieapp.PNG";
import weatherapp from "../Img/weatherapp.jpg";
import newsapp from "../Img/newsapp.PNG";

const SplitIndex = React.lazy(() => import("./pagination/Index.js"));

let toylists = [
  {
    id: 1,
    src: wootube,
    name: "wootube",
  },
  {
    id: 2,
    src: todolist,
    name: "todolist",
  },
  {
    id: 3,
    src: calculator,
    name: "calculator",
  },
  {
    id: 4,
    src: rps,
    name: "rps",
  },
  {
    id: 5,
    src: paint,
    name: "paint",
  },
  {
    id: 6,
    src: movieapp,
    name: "movieapp",
  },
  {
    id: 7,
    src: weatherapp,
    name: "weatherapp",
  },
  {
    id: 8,
    src: newsapp,
    name: "newsapp",
  },
];

let mainlists = [
  {
    id: 1,
    src: sandbox,
    name: "sandbox",
  },
  {
    id: 2,
    src: hungref,
    name: "hungref",
  },
];

const MainToy = ({ match, location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { category } = match.params;
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const toyCurrentPosts = toylists.slice(indexOfFirstPost, indexOfLastPost);
  const mainCurrentPosts = mainlists.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setCurrentPage(parseInt(query.page));
    if (query.page === undefined) {
      return setCurrentPage(1);
    }
  }, [query.page]);

  return (
    <>
      {category === "toy" ? (
        <>
          <Suspense fallback={<div>로딩 중...</div>}>
            <SplitIndex lists={toyCurrentPosts} name="toy" />
          </Suspense>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={toylists.length}
            name="toy"
          />
        </>
      ) : (
        <>
          <Suspense fallback={<div>로딩 중...</div>}>
            <SplitIndex lists={mainCurrentPosts} name="main" />
          </Suspense>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={mainlists.length}
            name="main"
          />
        </>
      )}
    </>
  );
};

export default React.memo(withRouter(MainToy));
