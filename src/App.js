import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { Users } from "./components/Users";
import { NewExpense } from "./components/NewExpenses";
import { Expenses } from "./components/Expenses";

const products = [
  {
    id: "1",
    title: "Рюкзак",
    price: 120,
    date: new Date("2023, 1, 22"),
  },
];

function App() {
  const [newExpense, setNewExpense] = useState(
    JSON.parse(localStorage.getItem("key")) || products
  );

  const [isLoggedIn, setIsloggenIn] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(newExpense));
  }, [newExpense]);

  useEffect(() => {
    const loginLS = localStorage.getItem("auth");
    setIsloggenIn(loginLS);
    const usersLS = localStorage.getItem("users");
    setShowUsers(usersLS);
  }, []);

  const addNewExpense = (data) => {
    setNewExpense([...newExpense, data]);
  };

  const clickUsers = () => {
    setShowUsers(true);
  };

  const loginHandler = () => {
    setIsloggenIn(true);
    localStorage.setItem("auth", !isLoggedIn);
  };

  const logoutHandler = () => {
    setIsloggenIn(false);
    setShowUsers(false);
    localStorage.removeItem("auth");
  };

  const showExpense = () => {
    setShowUsers(false);
  };

  return (
    <div className="App">
      <Header
        showExpense={showExpense}
        isLoggedIn={isLoggedIn}
        clickUsers={clickUsers}
        logoutHandler={logoutHandler}
      />
      {isLoggedIn ? (
        <>
          {showUsers ? (
            <Users />
          ) : (
            <>
              <NewExpense addNewExpense={addNewExpense} />
              <Expenses newExpense={newExpense} />
            </>
          )}
        </>
      ) : (
        <LoginForm loginHandler={loginHandler} />
      )}
    </div>
  );
}

export default App;
