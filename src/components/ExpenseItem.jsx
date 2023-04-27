import React from "react";
import styled from "styled-components";

export const ExpenseItem = ({ elem }) => {
  const dateMonth = new Date(elem.date).toLocaleString("en-En", {
    month: "long",
  });

  const fullYear = new Date(elem.date).getFullYear().toString();

  const date = new Date(elem.date).getDate();

  return (
    <Card>
      <CardContainer>
        <ContainerOne>
          <DateContainer>
            <FirstSpan>{dateMonth}</FirstSpan>
            <SecondSpan>{+date}</SecondSpan>
            <ThirdSpan>{+fullYear}</ThirdSpan>
          </DateContainer>
          <CustomTitle>{elem.title}</CustomTitle>
        </ContainerOne>
        <Price>${elem.price}</Price>
      </CardContainer>
    </Card>
  );
};

const Card = styled.ul`
  background-color: #4b4b4b;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 748px;
`;

const CardContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ContainerOne = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const DateContainer = styled.div`
  background-color: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 8px 23.11px 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #fff;
  width: 110px;
`;

const FirstSpan = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 12px;
  text-transform: capitalize;
`;

const SecondSpan = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 15px;
  margin-top: 8px;
`;

const ThirdSpan = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  margin-top: 4px;
`;

const CustomTitle = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

const Price = styled.span`
  background: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 10px 18px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;