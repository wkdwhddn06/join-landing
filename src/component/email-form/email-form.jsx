import React from "react";
import styled from "styled-components";
import InputForm from "./Input-form";

const EmailForm = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <InputForm title="이름" />
      <InputForm title="이메일" />
      <InputForm title="휴대폰 번호" />
      <InputForm title="모듈 설명" long={true} />
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  @media only screen and (max-width: 800px) {
    width: 85%;
  }
  margin-top: 300px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: calc(20px + 0.5vw);
  font-weight: 700;
`;

const SubTitle = styled.span`
  margin-top: 10px;
  font-size: calc(15px + 0.2vw);
  font-weight: 400;
  color: #707070;
`;

export default EmailForm;
