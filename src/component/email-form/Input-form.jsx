import React from "react";
import styled from "styled-components";

const InputForm = ({ title, long }) => {
  return (
    <>
      <Title>{title}</Title>
      <Input type="textarea" id="lname" name="lname" long={long}></Input>
    </>
  );
};

InputForm.defaultProps = {
  long: false,
};

const Title = styled.span`
  margin-top: 60px;
  font-size: calc(20px + 0.1vw);
  font-weight: 400;
  color: #707070;
`;

const Input = styled.textarea`
  height: ${(props) => (props.long ? "300px" : "60px")};
  @media only screen and (min-width: 800px) {
    width: 60%;
  }
  margin-top: 20px;
  border: 1px solid #b9b9b9;
  border-radius: 16px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  font-weight: 400;
  padding-left: 16px;
  padding-right: 16px;
  display: inline-block;
  vertical-align: middle;
  padding-top: ${(props) => (props.long ? "12px" : "0px")};
  vertical-align: ${(props) => (props.long ? "text-top" : "middle")};
  outline: 0px;
`;

export default InputForm;
