import React from "react";
import styled from "styled-components";

const Question = () => (
  <Container>
    <Title>자주 찾는 도움말</Title>
    <Text>내 앱이 동작하지 않아요.</Text>
    <Text>내 앱을 플레이스토어에 올리고 싶어요</Text>
    <Text>아이폰용 앱을 만들고 싶어요</Text>
    <Text>의뢰를 요청하고 싶어요</Text>
    <Text>네트워크 기능이 작동하지 않아요</Text>
  </Container>
);

const Title = styled.span`
  font-size: calc(20px + 0.5vw);
  font-weight: 700;
`;

const Text = styled.span`
  margin-top: 15px;
  font-size: calc(15px + 0.2vw);
  font-weight: 400;
  color: #707070;
`;

const Container = styled.div`
  width: 60%;
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  margin-top: 300px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
`;

export default Question;
