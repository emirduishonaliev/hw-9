import React from "react";
import { useState } from "react";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import styled from "styled-components";

export const ExpenseForm = ({ addNewExpense, clickHandler }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const changeInput = (e) => {
    setTitle(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(+e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };

  const saveHandler = (e) => {
    e.preventDefault();

    const data = {
      id: Date.now().toString(),
      title,
      price: +price,
      date: new Date(date),
    };

    addNewExpense(data);
    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <StyledForm onSubmit={saveHandler}>
      <InputContainer>
        <Input
          onChange={changeInput}
          value={title}
          inputType="text"
          labelName="Заголовок"
          id="1"
        />
        <Input
          onChange={changePrice}
          value={price}
          inputType="number"
          labelName="Количество"
          id="2"
        />
      </InputContainer>

      <InputCont>
        <Input
          onChange={changeDate}
          value={date}
          inputType="date"
          labelName="Дата"
          id="3"
        />
      </InputCont>

      <Container>
        <ButtonContainer>
          <Button
            bgColor="#4a026b"
            color="#fff"
            brRadius="10px"
            onClick={clickHandler}
            title="Отмена"
          />
          <Button
            bgColor="#4a026b"
            color="#fff"
            brRadius="10px"
            onClick={saveHandler}
            title="Добавить расходы"
          />
        </ButtonContainer>
      </Container>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 780px;
  background: #ad9be9;
  border-radius: 12px;
  padding: 30px 40px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  /* flex-wrap: inherit;     */
  /* flex-wrap: wrap; */
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

const InputCont = styled.div`
  margin-top: 11px;
  margin-left: -434px;
`;
