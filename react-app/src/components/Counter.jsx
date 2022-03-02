import { useState } from "react";

const Counter = () => {
  const [number2, setNumber2] = useState(0);
  //let number = 0;
  return (
    <>
      <h1>{number2}</h1>
      <button
        onClick={() => {
          setNumber2(number2 + 1);
        }}
      >
        +1
      </button>
    </>
  );
};

export default Counter;
