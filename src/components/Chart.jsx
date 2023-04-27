import React from "react";
import ChartBar from "./ChartsBar";
import styled from "styled-components";

export const Chart = ({ filteredYear }) => {
  const maximumPrise = 2000;

  const months = [
    { label: "January", currentPrise: 0 },
    { label: "February", currentPrise: 0 },
    { label: "March", currentPrise: 0 },
    { label: "April", currentPrise: 0 },
    { label: "May", currentPrise: 0 },
    { label: "June", currentPrise: 0 },
    { label: "July", currentPrise: 0 },
    { label: "August", currentPrise: 0 },
    { label: "September", currentPrise: 0 },
    { label: "October", currentPrise: 0 },
    { label: "November", currentPrise: 0 },
    { label: "December", currentPrise: 0 },
  ];

  filteredYear.forEach((item) => {
    const monthNumber = new Date(item.date).getMonth();
    months[monthNumber].currentPrise += item.price;
  });

  return (
    <ChartStyle>
      {months.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrise={item.currentPrise}
          maximumPrise={maximumPrise}
        />
      ))}
    </ChartStyle>
  );
};

const ChartStyle = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  margin: 18px 10px 0px 10px;
  width: 740px;
  margin-left: 40px;
`;
