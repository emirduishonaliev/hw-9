import React from "react";
import styled from "styled-components";
import { Button } from "./UI/Button";

export const Header = ({
  isLoggedIn,
  clickUsers,
  logoutHandler,
  showExpense,
}) => {
  return (
    <StyledHeader>
      {isLoggedIn && (
        <Nav>
          <Button title="Expenses" onClick={showExpense} />
          <Button
            onClick={clickUsers}
            marginLeft="10px"
            marginRight="10px"
            title="Users"
          />
          <Button title="Logout" onClick={logoutHandler} />
        </Nav>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #9c58db;
  padding: 20px 20px;
  margin-bottom: 70px;
`;

const Nav = styled.div`
  margin-left: 1120px;
`;
