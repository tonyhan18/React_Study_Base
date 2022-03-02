import React from "react";

const Jsx = () => {
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div style={style}>리액트</div>
      <h1 className="react">리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
};

export default Jsx;
