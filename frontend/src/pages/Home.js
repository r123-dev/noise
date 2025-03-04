import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseFilter from "../components/ExpenseFilter";
import axios from "axios";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/expenses");
      setExpenses(res.data);
      setFilteredExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  return (
    <div className="home">
      <ExpenseForm fetchExpenses={fetchExpenses} />
      <ExpenseFilter expenses={expenses} setFilteredExpenses={setFilteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default Home;
