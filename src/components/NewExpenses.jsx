import React from "react";
import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import { Button } from "./UI/Button";
import styled from "styled-components";

export const NewExpense = ({ addNewExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const clickHandler = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <StyledNewExpense>
      {showForm ? (
        <ExpenseForm
          addNewExpense={addNewExpense}
          clickHandler={clickHandler}
        />
      ) : (
        <Button
          bgColor="#4a026b"
          color="#fff"
          brRadius="10px"
          onClick={clickHandler}
          title="Добавить новый расход"
        />
      )}
    </StyledNewExpense>
  );
};

const StyledNewExpense = styled.div`
  background-color: #ad9be9;
  border-radius: 12px;
  padding: 20px 0px;
  width: 780px;
  display: flex;
  justify-content: center;
`;
