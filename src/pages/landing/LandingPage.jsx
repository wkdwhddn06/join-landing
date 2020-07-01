import React from 'react';
import styled from 'styled-components';
import MainMockUp from '../../images/mainMockUp.png';


const LandingPage = () => (
  <>
    <TitleContainer>
      <H1>만들어보죠</H1>
      <H3>
        당신이 정말 사랑하는 앱과
        <br />
        당신만의 커뮤니티
      </H3>
      <div>
        <MockUp src={MainMockUp} alt="mainMockUp" />
      </div>
    </TitleContainer>
  </>
);

const TitleContainer = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const H1 = styled.span`
    font-size: calc(50px + 1.5vw);
    font-weight: 900;
`;

const H3 = styled.span`
    margin-top: 20px;
    padding: 0px;
    font-size: calc(25px + 1.2vw);
    font-weight: 400;
    text-align: center;
`;

const MockUp = styled.img`
    margin-top: 60px;
`;

export default LandingPage;
