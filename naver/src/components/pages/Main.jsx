import { Link } from "react-router-dom";
import styled from "styled-components";
import { Title } from "../atoms/index";

const Main = () => {
  return (
    <>
      <Title>영화 & 책 검색 사이트</Title>
      <Wrapper>
        <Link to="/movie">
          <BtnLink>영화 검색</BtnLink>
        </Link>
        <Link to="/book">
          <BtnLink>책 검색</BtnLink>
        </Link>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  //위치
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  //크기
  //꾸미기
`;
const BtnLink = styled.button`
  //위치
  margin: 20px;
  width: 300px;
  height: 100px;
  //크기
  font-size: 1.5rem;
  //꾸미기
  background-color: #fff;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 4px;
`;

export default Main;
