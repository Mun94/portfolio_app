import React from "react";
import Detail from "../Detail.js";
import styled from "styled-components";

const Video = styled.div`
  display: flex;
  justify-content: center;
`;

const Cucook = () => {
  return (
    <>
      <Detail>
        <Video>
          <iframe
            title="youtube"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/5oQRAKFwUVU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Video>
        <p>
          자취를 하며 항상 오늘 점심은 뭐 먹지?? 저녁은 뭐 먹지??에 대한 고민이
          있었고 취업 준비를 하며 시간을 아끼고 간편하게 끼니를 해결할 수 있는
          레시피를 알아내기 위해 검색엔진을 통해 검색하거나 만개의 레시피,
          해먹과 같은 서비스를 이용하며 끼니를 해결 하곤 했습니다. 하지만 이런
          서비스를 이용하며 느낀 점은 다양한 카테고리와 레시피들로 자신이 원하는
          정보에 접근할 수 있다는 장점이 있었지만 괜찮은 레시피가 있어 친구와
          공유하고 싶을 때 한 화면에 카카오톡과 만개의 레시피 어플리케이션을
          띄워야 한다는 점과 ‘주방 용품 판매‘와 같은 불필요한 기능들로
          인터페이스가 복잡해 보인다는 불편한 점이 있었습니다. 이를 해결하기
          위해 CUCOOK 서비스를 제작하게 되었고{" "}
          <span style={{ color: "red" }}>
            카테고리 또는 데이터가 조금 더 직관적
          </span>
          이며 여러 사람들과{" "}
          <span style={{ color: "red" }}>레시피를 공유하기 편한 서비스</span>를
          만드는 것 이 최종 목표입니다.
        </p>
      </Detail>
    </>
  );
};

export default Cucook;
