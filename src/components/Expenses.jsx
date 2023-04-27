import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import styled from "styled-components";
import { Button } from "./UI/Button";
import { Chart } from "./Chart";

export const Expenses = ({ newExpense }) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const [sortExpense, setSortExpense] = useState(true);

  const dropDownChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredYear = newExpense.filter((elem) => {
    const fullYear = new Date(elem.date).getFullYear().toString();
    return fullYear === selectedYear;
  });

  const descendingHandler = () => {
    setSortExpense(true);
  };

  const ascendingHandler = () => {
    setSortExpense(false);
  };

  let descending;
  let ascending;

  if (sortExpense) {
    descending = filteredYear.sort((a, b) => a.date - b.date);
  } else {
    ascending = filteredYear.sort((a, b) => b.date - a.date);
  }

  const desStyleBtn = sortExpense ? "#4a026b" : "#fff";
  const ascStyleBtn = sortExpense ? "#fff" : "#4a026b";

  return (
    <StyledExpenses>
      <Filter>
        <FilterDate>
          <Button
            title="По Убыванию"
            bgColor={`${desStyleBtn}`}
            color={`${ascStyleBtn}`}
            brRadius="10px 10px 0px 0px"
            onClick={descendingHandler}
          />
          <Button
            title="По Возрастанию"
            bgColor={`${ascStyleBtn}`}
            color={`${desStyleBtn}`}
            brRadius="10px 10px 0px 0px"
            onClick={ascendingHandler}
          />
        </FilterDate>

        <Select value={selectedYear} onChange={dropDownChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </Select>
      </Filter>

      <div>
        <Chart filteredYear={filteredYear} />
      </div>
      <div>
        {sortExpense
          ? descending.map((elem) => <ExpenseItem key={elem.id} elem={elem} />)
          : ascending.map((elem) => <ExpenseItem key={elem.id} elem={elem} />)}
      </div>
    </StyledExpenses>
  );
};

const StyledExpenses = styled.div`
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 28px 16px;
  margin-top: 28px;
  margin-bottom: 60px;
  width: 860px;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
`;

const FilterDate = styled.div`
  display: flex;
  gap: 20px;
`;

const Select = styled.select`
  padding: 13px 12px 14px 12px;
  background: #ffffff;
  border-radius: 6px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
`;
