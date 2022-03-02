import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("asdf");
  const [nickname, setNickname] = useState("eeeee");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ name, nickname });
  });

  // 최초에 마운트 될 때 한번만 실행하고 싶을 때
  useEffect(() => {
    console.log("마운트 됩니다.");

    return () => {
      console.log("unmount");
    };
  }, []);

  // 어떤 변수가 값이 바뀔 때 마다 함수를 실행하고 싶을 때
  useEffect(() => {
    console.log(`name값이 변경되었습니다. ${name}`);
    return () => {
      console.log("name값이 바뀝니다.");
    };
  }, [name]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNickname = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div>
        <input placeholder="이름" onChange={handleChangeName} />
        <input placeholder="닉네임" onChange={handleChangeNickname} />
      </div>
      <h2>이름 : {name}</h2>
      <h2>닉네임 : {nickname}</h2>
    </>
  );
};

export default Info;
