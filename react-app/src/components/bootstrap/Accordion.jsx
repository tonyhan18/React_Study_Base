import { useState } from "react";
import styled from "styled-components";
import { css } from "../../../node_modules/styled-components/dist/styled-components.cjs";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (id) => {
    if (activeIndex === id) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(id);
  };
  return (
    <>
      <List>
        {data.map(({ id, title, content }, index) => (
          <Item key={id} active={id === activeIndex}>
            <Header onClick={() => handleClick(id)}>
              {title}
              <ImgArrow>^</ImgArrow>
            </Header>
            <Body>{content}</Body>
          </Item>
        ))}
      </List>
    </>
  );
};

const List = styled.ul`
  margin: 60px auto;
  max-width: 800px;
  border: 1px solid #efefef;
  border-radius: 4px;
`;
const Item = styled.li`
  transition: all ease 2s 0s;
  & + & {
    border-top: 1px solid #efefef;
  }
  ${({ active }) =>
    active &&
    css`
      ${Header} {
        background: #0c63e4;
        background-color: #e7f1ff;
      }
      ${Body} {
        display: block;
      }
      ${ImgArrow} {
        transform: rotate(-180deg);
      }
    `}
`;
const Header = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
const Body = styled.div`
  padding: 15px;
  border-top: 1px solid #efefef;
  display: none;
`;

const ImgArrow = styled.div`
  transition: 0.5s;
`;
export default Accordion;
