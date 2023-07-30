import React from "react";

const Box = (props) => {
  const { who, pick, result } = props;
  return (
    <div className={`box ${result}`}>
      <h2>{who}</h2>
      <img src={pick && pick.img} alt="" />
      <h2>{pick && pick.name}</h2>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
