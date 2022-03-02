import React, { useRef, useState } from "react";

const IterationSample = () => {
  const [value, setValue] = useState("");
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const nextId = useRef(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.length === 0) return; // early return
    setNames([...names, { id: nextId, text: value }]);
    setValue("");
    nextId.current = nextId.current + 1;
  };

  const handleDelete = (id) => {
    //alert(id);
    // ```
    // 1. parameter로 받아온 id와 names배열에서 id가 같은 element를 찾는다.
    // 2. 그 element만 제거된 새로운 배열을 만든다. -> filter 함수
    // 3. 새로운 배열을 setNames 함수를 이용해서 names를 변경시킨다.
    // ```;
    const newNames = names.filter((name) => {
      return name.id !== id;
    });
    setNames(newNames);
  };

  return (
    <div>
      <input onChange={handleChange} value={value} />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name) => {
          return (
            <li key={names.id} onDoubleClick={() => handleDelete(name.id)}>
              {name.text}
            </li>
          );
        })}
        <li>눈사람</li>
        <li>얼음</li>
        <li>눈</li>
        <li>바람</li>
      </ul>
    </div>
  );
};

export default IterationSample;
