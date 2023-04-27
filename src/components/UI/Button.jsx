import React from "react";
import styled from "styled-components";

export const Button = ({
  onClick,
  title,
  disabled,
  marginLeft,
  marginRight,
}) => {
  return (
    <StyledBtn
      style={{ marginRight: marginRight, marginLeft: marginLeft }}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </StyledBtn>
  );
};
const StyledBtn = styled.button`
  width: 80px;
  background-color: #4d1373;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  :disabled {
    background-color: gray;
  }
`;
