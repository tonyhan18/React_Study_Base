import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <h1>영화 & 책 검색 사이트</h1>
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
  display: flex;
  align-items: center;
  margin-top: 60px;
  flex-direction: column;
`;

const BtnLink = styled.button`
  margin: 20px;
  width: 300px;
  height: 100px;
  font-size: 20px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #ddd;
`;

export default Main;
