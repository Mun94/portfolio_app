import React from "react";
import Detail from "../Detail.js";
import styled from 'styled-components';

const Video = styled.div`
  display:flex;
  justify-content:center;
`

const Newsapp = () => {
  return (
    <>
      <Detail>
        <Video>
      <iframe
        title="youtube"
        width="800"
        height="450"
        src='https://www.youtube.com/embed/UDy0o3DKdHU'
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe></Video>
<p>댓글은 다양한 정보들을 내포하고 있고 크리에이터와 시청자의 소통 창구로써 중요한 역할을 하고 있습니다. 크리에이터의 규모가 커질수록 댓글의 수 또한 증가하게 되었고 크리에이터가 대부분의 댓글 내용을 확인한다는 것은 실현하기 어려운 문제가 되었습니다. 크리에이터가 최대한 여러 시청자들의 의견을 접할 수 있도록 기능을 구현하고 시청자들이 크리에이터들의 활동을 조금 더 직관적으로 확인할 수 있도록 서비스를 구현하는 것이 목표입니다.
이 서비스를 이용하는 사용자(크리에이터)는 효율적인 시청자 관리와 시청자들과 다방면으로 소통을 할 수 있게 됨으로써 질적으로 나은 콘텐츠 제작이 가능할 것으로 예상됩니다.
또한 이 서비스를 이용하는 사용자(시청자)는 다양한 볼거리를 제공받을 수 있으며 영상 시청 중 궁금한 점이 있을 경우 빠른 댓글 검색을 통해 자신이 원하는 정보에 접근할 수 있어 궁금증 해결에 도움이 될 것으로 예상됩니다.</p>
</Detail>
    </>
  );
};

export default Newsapp;
