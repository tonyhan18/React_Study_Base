import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItems = [
  { link: "/", name: "메인" },
  { link: "/movie", name: "영화" },
  { link: "/book", name: "책" },
];

const TopNav = () => {
  return (
    <Container>
      <Nav>
        {NavItems.map(({ link, name }) => (
          <CustomeLink to={link}>
            <LinkItem>{name}</LinkItem>
          </CustomeLink>
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
const CustomeLink = styled(NavLink)`
  &.active {
    background-color: black;
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
const LinkItem = styled.div`
  margin: 10px 15px;
`;

export default TopNav;
