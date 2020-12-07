import React from "react";
import styled from "styled-components";

const PlanSection = () => (
  <Container>
    <Title>PLAN</Title>
    <PlanContainer>
      <Plan>
        <PlanBox>
          <PlanName>LITE</PlanName>
          <PlanDesc>
            - 앱 아이콘
            <br />
            - 스플래시 화면
            <br />
            - 앱 등록
            <br />
            - 페이지 수 2개
            <br />
            - 기능 추가 2개
            <br />
            - 디자인 제공
            <br />
            - 인앱 광고
            <br />
          </PlanDesc>
        </PlanBox>
        <Price>500,000원</Price>
      </Plan>
      <Plan>
        <PlanBox>
          <PlanName>STANDARD</PlanName>
          <PlanDesc>
            - 앱 아이콘
            <br />
            - 스플래시 화면
            <br />
            - 앱 등록
            <br />
            - 페이지 수 5개
            <br />
            - 기능 추가 5개
            <br />
            - 디자인 제공
            <br />
            - 인앱 광고
            <br />
          </PlanDesc>
        </PlanBox>
        <Price>1,500,000원</Price>
      </Plan>
      <Plan>
        <PlanBox>
          <PlanName>CUSTOM</PlanName>
          <PlanDesc>- 추후 문의</PlanDesc>
        </PlanBox>
        <Price>추후 문의</Price>
      </Plan>
    </PlanContainer>
  </Container>
);

const PlanName = styled.span`
  color: black;
  font-weight: 700;
  font-size: 30px;
`;

const PlanDesc = styled.p`
  color: #707070;
  font-weight: 400;
  font-size: 20px;
  margin-top: 25px;
`;

const PlanBox = styled.div`
  flex: 1;
`;

const Price = styled.div`
  color: black;
  font-weight: 700;
  font-size: 30px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Plan = styled.div`
  height: 500px;
  width: 320px;
  background-color: white;
  -webkit-box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 5px 20px 4px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  @media only screen and (max-width: 1250px) {
    width: 100%;
    height: 600px;
    margin-top: 20px;
  }
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: calc(20px + 0.5vw);
  font-weight: 700;
`;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 1250px) {
    flex-direction: column;
  }
  margin-top: 20px;
`;

const Container = styled.div`
  width: 60%;
  @media only screen and (max-width: 1700px) {
    width: 85%;
  }
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;

export default PlanSection;
