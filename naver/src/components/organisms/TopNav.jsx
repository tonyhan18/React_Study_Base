import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const linkList = [
  {
    link: "/",
    name: "메인",
  },
  {
    link: "/movie",
    name: "영화",
  },
  {
    link: "/book",
    name: "책",
  },
];

const TopNav = () => {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return <></>;
  }
  return (
    <Container>
      <Nav>
        {linkList.map(({ link, name }) => (
          <CustomLink to={link} key={link + name}>
            <LinkItem>{name}</LinkItem>
          </CustomLink>
        ))}
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LinkItem = styled.div`
  margin: 0 10px;
  padding: 10px;
`;
const CustomLink = styled(NavLink)`
  &.active {
    background: #000;
    color: #fff;
  }
`;

export default TopNav;
