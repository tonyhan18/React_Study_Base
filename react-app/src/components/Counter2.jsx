import React, { useState } from "react";

const Counter2 = () => {
  const [val, setVal] = useState(7);

  const handleUp = () => {
    setVal(val + 1);
  };
  const handleDown = () => {
    setVal(val - 1);
  };
  return (
    <>
      <h2>현재 카운터 값은 {val} 입니다</h2>
      <button onClick={handleUp}>+1</button>
      <button onClick={handleDown}>-1</button>
    </>
  );
};

export default Counter2;
