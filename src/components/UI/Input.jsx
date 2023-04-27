import React from "react";

import styled from "styled-components";

export const Input = ({
  onChange,
  inputType,
  labelName,
  id,
  placeholder,
  ...rest
}) => {
  return (
    <InputForm>
      <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      <StyledInput
        onChange={onChange}
        className="input"
        type={inputType}
        id={id}
        placeholder={placeholder || ""}
        {...rest}
      />
    </InputForm>
  );
};

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 8px;
`;

const StyledLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

const StyledInput = styled.input`
  padding: 10px 18px 9px 18px;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  border: none;
  outline: none;
  &:active {
    border: 1px solid #3f3f3f;
  }
`;
