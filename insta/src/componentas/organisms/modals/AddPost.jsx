import React, { useRef } from "react";
import styled from "styled-components";
import { ModalContainer, Backdrop } from "../../atoms/modal";

const ModalAddPost = ({ onClose }) => {
  const fileEl = useRef(null);
  return (
    <>
      <Container>
        <Header>새 게시물 만들기</Header>
        <Main>
          <Guide>사진과 동영상을 여기에 끌어다 놓으세요</Guide>
          <BtnFile onClick={() => fileEl.current.click()}>
            컴퓨터에서 선택
          </BtnFile>
          <InputFile type="file" ref={useRef} />
        </Main>
      </Container>
      <Backdrop onClick={onClose} />
    </>
  );
};

const Container = styled(ModalContainer)``;
const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 43px;
  border-bottom: 1px solid #dbdbdb;
  color: #262626;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
const Main = styled.main``;
const Guide = styled.h4``;
const BtnFile = styled.button``;
const InputFile = styled.input`
  //display: hidden;
`;

export default ModalAddPost;
