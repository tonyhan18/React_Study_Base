import React from "react";
import styled, { css } from "styled-components";

const Btn = styled.button`
  background: #fff;
  border: none;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
`;

const BtnRed = styled(Btn)`
  background: red;
  color: white;
`;

const BtnBlue = styled(Btn)`
  background: blue;
  color: #fff;
`;

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  //box-sizing: border-box;

  width: 1024px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  ${Btn} {
    background: black;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0, 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}

  &+button {
    // 버튼자기자신(&) 바로 뒤에오는 버튼에게(형제 선택자) 속성을 주겠다는 의미
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Btn>기본 버튼</Btn>
      <BtnRed>기본 버튼</BtnRed>
      <BtnBlue>기본 버튼</BtnBlue>
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
      <Button inverted>테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
