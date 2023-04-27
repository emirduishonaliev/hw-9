import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./UI/Button";

export const LoginForm = ({ loginHandler }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const emailValidate = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const passwordValidate = () => {
    setPasswordIsValid(enteredPassword.trim().length >= 6);
  };

  const submitHandler = () => {
    loginHandler();
  };

  return (
    <Container>
      <div>
        <EmailLabel htmlFor="email">E-Mail</EmailLabel>
        <StyledInput
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailValidate}
          value={enteredEmail}
          id="email"
          style={
            !emailIsValid
              ? { backgroundColor: "#c70e0e71" }
              : { backgroundColor: "#fff" }
          }
        />
      </div>
      <div>
        <PasswordLabel htmlFor="password">Password</PasswordLabel>
        <StyledInput
          type="password"
          onChange={passwordChangeHandler}
          onBlur={passwordValidate}
          value={enteredPassword}
          id="password"
          style={
            !passwordIsValid
              ? { backgroundColor: "#c70e0e71" }
              : { backgroundColor: '"#fff"' }
          }
        />
      </div>
      <BtnContainer>
        <Button title="Login" onClick={submitHandler} disabled={!formIsValid} />
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 550px;
  background-color: white;
  box-shadow: 5px 5px 5px gray;
  padding: 35px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 28px;
  border: 0.5px soild gray;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const EmailLabel = styled.label`
  margin-right: 25px;
`;

const PasswordLabel = styled.label`
  margin-right: 10px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
