import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "./Input-form";
import axios from "axios";

const EmailForm = ({ title, subtitle }) => {
  const [text, setText] = useState("전송");
  const [isSending, setIsSending] = useState();

  function postMail() {
    var name = document.getElementsByName("name").values;
    var email = document.getElementsByName("email").values;
    var phone = document.getElementsByName("phone").values;
    var message = document.getElementsByName("message").values;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    setIsSending('disabled');
    setText("전송중...");
    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzrZkwFQpQtR8ewZRQfGlu0GSdhA4Q0o--rCerj/exec",
        formData
      )
      .then((res) => {
        setIsSending(false);
        setText("성공");
        console.log(res);
      })
      .catch((error) => {
        setIsSending(false);
        setText("실패");
        console.log(error);
      });
  }

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <GForm class="gform">
        <InputForm name="name" title="이름" />
        <InputForm name="email" title="이메일" />
        <InputForm name="phone" title="휴대폰 번호" />
        <InputForm name="message" title="설명" long={true} />
        <Button onClick={postMail} disabled={isSending}>{text}</Button>
      </GForm>
    </Container>
  );
};

const Button = styled.button`
  margin-top: 60px;
  width: 300px;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  height: 60px;
  border: 1px solid skyblue;
  color: white;
  background-color: black;
  border-radius: 24px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: 20px;
  border: 1px solid skyblue;
  outline: 0px;
`;

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

const GForm = styled.div`
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
