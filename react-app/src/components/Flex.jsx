import React from "react";
import styled from "styled-components";

const Flex = () => {
  return (
    <Container>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;
const Box = styled.div`
  width: 200px;
  height: 200px;
`;
const Box1 = styled(Box)`
  background: red;
  height: 100px;
`;
const Box2 = styled(Box)`
  background: black;
  width: 100px;
`;
const Box3 = styled(Box)`
  background: blue;
  height: 300px;
  width: 300px;
`;
const Box4 = styled(Box)`
  background: green;
  height: 300px;
`;
export default Flex;
