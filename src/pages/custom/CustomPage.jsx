import React from "react";
import styled from "styled-components";
import PersonalizationUnDraw from "../../images/undraw_personalization.svg";
import EmailForm from "../../component/email-form/email-form";

const CustomPage = () => (
  <Container>
    <MockUp src={PersonalizationUnDraw} alt="PersonalizationUnDraw" />
    <Title>CUSTOM</Title>
    <Content>고객님의 니즈에 맞는 커스텀 모듈을 추가해드립니다.</Content>
    <EmailForm
      title="커스텀 신청"
      subtitle="어떤 모듈을 만들고 싶은지 자세히 적어주세요"
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
