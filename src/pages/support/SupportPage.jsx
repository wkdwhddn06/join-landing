import React from "react";
import styled from "styled-components";
import SupportUnDraw from "../../images/undraw_team_spirit.svg";
import EmailForm from "../../component/email-form/email-form";

const CustomPage = () => (
  <Container>
    <MockUp src={SupportUnDraw} alt="SupportUnDraw" />
    <Title>SUPPORT</Title>
    <Content>무엇을 도와드릴까요?</Content>
    <EmailForm
      title="고객지원 연락"
      subtitle="어떤 이야기든 환영입니다. 자주 묻는 질문에 있는 내용만 빼고요."
    />
  </Container>
);

const Title = styled.span`
  margin-top: 50px;
  font-family: "DM Serif Display", serif;
  font-size: calc(50px + 1.5vw);
`;

const Content = styled.span`
  margin-top: 10px;
  font-size: calc(20px + 0.1vw);
  font-weight: 400;
`;

const MockUp = styled.img`
  width: calc(300px + 12vw);
  margin-top: calc(20px + 5vw);

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  &:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export default CustomPage;
