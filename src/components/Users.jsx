import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Users = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);
  return (
    <div>
      {people.map((el) => {
        return (
          <UserContainer>
            <h3>{el.name}</h3>
          </UserContainer>
        );
      })}
    </div>
  );
};

const UserContainer = styled.div`
  width: 600px;
  height: 80px;
  padding: 30px 100px;
  color: #fff;
  background-color: #9c58db;
  border: 1px solid yellow;
  border-radius: 10px;
  margin-top: 7px;
`;
