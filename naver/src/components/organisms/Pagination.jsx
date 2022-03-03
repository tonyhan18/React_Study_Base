import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const Pagination = ({ onPageChange, total, nowPage }) => {
  const lastPage = total / 10 + 1;
  const pageList = [];
  const startPage = Math.ceil(nowPage / 10) * 10 - 9;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  const onHandleChange = (page) => {
    console.log(page);
    onPageChange((prev) => {
      if (prev.value !== page) return page;
    });
  };

  return (
    <List>
      {nowPage > 1 && (
        <Item onClick={() => onPageChange(nowPage - 1)}>{"<"}</Item>
      )}
      {pageList.map((page) => (
        <Item
          key={page}
          onClick={() => onHandleChange(page)}
          value={page}
          isActive={page === nowPage}
        >
          {page}
        </Item>
      ))}
      {nowPage < lastPage && (
        <Item onClick={() => onPageChange(nowPage + 1)}>{">"}</Item>
      )}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: center;
`;
const Item = styled.li`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  ${(props) =>
    props.isActive &&
    css`
      background: #000;
      color: white;
    `}
  :hover {
    background: #333;
    color: white;
  }
`;

export default Pagination;
