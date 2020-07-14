import React from "react";
import styled from "styled-components";

function NavItem({ name, temp, sn }) {
  return (
    <NoDrag>
      {console.log(`${name}:${temp}, ${sn}`)}
      <Container pressed={sn === temp}>
        <Text pressed={sn === temp}>{name}</Text>
      </Container>
    </NoDrag>
  );
}

const NoDrag = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Container = styled.div`
  height: auto;
  width: auto;
  padding-left: 4px;
  padding-right: 4px;
  margin: 8px;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 24px;
  color: ${(props) => (props.pressed ? "white" : "black")};
  background-color: ${(props) => (props.pressed ? "black" : "white")};
`;

const Text = styled.div`
  margin: 10px;
  font-weight: ${(props) => (props.pressed ? 900 : 400)};
  align-self: center;
  font-size: 16px;
`;

export default NavItem;
