import React from "react";
import styled from "styled-components";
import BusinessUnDraw from "../../images/undraw_businessman.svg";
import EmailForm from "../../component/email-form/email-form";
import PlanSection from "./PlanSection";

const BusinessPage = () => (
  <Container>
    <MockUp src={BusinessUnDraw} alt="BusinessUnDraw" />
    <Title>BUSINESS</Title>
    <Content>
      무엇이든지 원하는 애플리케이션을 JOIN 팀이 직접 제작해 드려요
    </Content>
    <PlanSection />
    <EmailForm title="BUSINESS CONTACT" subtitle="비지니스 연락" />
  </Container>
);

const Title = styled.span`
  margin-top: 50px;
  font-family: "DM Serif Display", serif;
  font-size: calc(50px + 1.5vw);
`;

const Content = styled.span`
  margin-top: 10px;
  margin-bottom: 300px;
  font-size: calc(15px + 0.4vw);
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

export default BusinessPage;
