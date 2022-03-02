import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const nextId = useRef(1);

  const handleDelete = (id) => {
    const newTodoList = todoList.filter((e) => e.id !== id);
    setTodoList(newTodoList);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Enter시 발생하는 새로고침 방지
    if (text === "") return;
    setTodoList([
      ...todoList,
      { id: nextId.current, text: text, isDone: false },
    ]);
    setText("");
    nextId.current++;
  };

  const handleIsDone = (e, id) => {
    const isDone = e.target.checked;
    const newTodoList = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isDone: isDone } : todo;
    });
    setTodoList(newTodoList);
  };

  return (
    <Container>
      <Title>일정관리</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <InputText
            value={text}
            placeholder="할 일을 입력해주세요"
            onChange={(e) => setText(e.target.value)}
            required
          />
          <BtnSubmit>+</BtnSubmit>
        </InputWrapper>
      </form>
      <List>
        {todoList.map(({ id, text, isDone }) => (
          <Item key={id}>
            <label>
              <Checkbox
                type="checkbox"
                onChange={(e) => handleIsDone(e, id)}
                checked={isDone}
              />
              <Content isDone={isDone}>{text}</Content>
            </label>
            <BtnDelete onClick={() => handleDelete(id)}>X</BtnDelete>
          </Item>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  // 1. 위치
  margin: 0 auto;
  margin-top: 6rem;
  // 2. 크기
  width: 512px;
  // 3. 꾸미기
  background-color: grey;
  border-radius: 5px;
  overflow: hidden;
`;
const Title = styled.div`
  // 1. 위치
  display: flex;
  justify-content: center;
  align-items: center;
  // 2. 크기
  height: 4rem;
  font-size: 1.5rem;
  font-family: sans-serif;
  color: white;
  // 3. 꾸미기
  background-color: #22b8cf;
`;

const InputWrapper = styled.div`
  //1. 위치
  display: flex;
  //2. 크기
  // 3. 꾸미기
  background-color: #495057;
`;
const InputText = styled.input`
  //1. 위치
  flex: 1;
  padding: 0.5rem;
  padding-left: 1rem;

  //2. 크기
  font-size: 1.125rem;
  //3. 꾸미기
  background: none;
  border: none;
  outline: none;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
`;
const BtnSubmit = styled.button`
  //1. 위치
  padding-left: 1rem;
  padding-right: 1rem;
  //2. 크기
  //3. 꾸미기
  border: none;
  background: none;
  outline: none;
  color: white;
  cursor: pointer;
  background-color: #868e96;
  font-size: 1.5rem;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
const List = styled.ul`
  //1. 위치설정
  //2. 크기
  //3. 꾸미기
`;
const Item = styled.li`
  //1. 위치설정
  display: flex;
  padding: 10px;

  //2. 크기
  //3. 꾸미기
  label {
    flex: 1;
    display: flex;
    align-items: center;
  }
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Checkbox = styled.input`
  //1. 위치설정
  //2. 크기
  //3. 꾸미기
  background: none;
  border: none;
  outline: none;
`;
const Content = styled.div`
  //1. 위치설정
  padding-left: 0.5rem;
  //2. 크기
  //3. 꾸미기
  /* color: ${(props) => (props.isDone ? "#efefef" : "#fff")};
  text-decoration: ${({ isDone }) => isDone && "line-through"}; */
  ${({ isDone }) => {
    isDone &&
      css`
        color: #efefef;
        text-decoration: line-through;
      `;
  }}
`;
const BtnDelete = styled.button`
  //1. 위치설정
  border-radius: 15px;
  //2. 크기
  //3. 꾸미기
  background: none;
  border: none;
  outline: none;
`;

export default Todo;
