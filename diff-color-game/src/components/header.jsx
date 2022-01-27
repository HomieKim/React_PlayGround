import React from "react";

const Header = ({
  score,
  stage,
  time,
}) => {
  return <div>스테이지: {stage}, 남은 시간: {time}, 점수: {score}</div>;
};

export default Header;
