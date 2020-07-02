import React from 'react';
import styled from 'styled-components';
import MainMockUp from '../../images/mainMockUp.png';

const MockUpSection = () => (
  <Container>
    <TextContainer>
      <H1>절대 어렵지 않아요</H1>
      <br/>
      <H3>당신 맘에 쏙드는 여러가지<br/>탬플릿도 준비했어요</H3>
    </TextContainer>
    <MockUp src={MainMockUp} alt="mainMockUp" />
    <TextContainer>
      <H1>JOINED APP</H1>
      <br/>
      <H3>언제든 참고 할 수 있는 선배<br/>애플리케이션들도 있죠</H3>
    </TextContainer>
  </Container>
)

const Container = styled.div`
    margin-bottom: 300px;
    height: fit-content;
    width: 100%;
    display: flex;
    @media only screen and (max-width: 1500px)
    {
      flex-direction: column;
    }
    align-items: center;
    justify-content: space-evenly;
`

const TextContainer = styled.div`
    width: 400px;
    margin-top: 40px;
    text-align: center;
    height: fit-content;
`;

const MockUp = styled.img`
    width: calc(380px + 15vw);
    @media only screen and (max-width: 1500px)
    {
      margin-top: 10px;
    }
    margin-top: 60px;
`;

const H1 = styled.span`
    font-size: calc(20px + 1.5vw);
    font-weight: 900;
`;

const H3 = styled.span`
    margin-top: 20px;
    padding: 0px;
    font-size: calc(12px + 1.2vw);
    font-weight: 400;
    text-align: center;
`;

export default MockUpSection