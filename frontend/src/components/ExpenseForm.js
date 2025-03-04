import React, { useState } from "react";
import axios from "axios";

const ExpenseForm = ({ fetchExpenses }) => {
  const [expense, setExpense] = useState({ amount: "", category: "", date: "", description: "" });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/expenses", expense);
    fetchExpenses();
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input type="number" name="amount" placeholder="Amount" value={expense.amount} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={expense.category} onChange={handleChange} required />
      <input type="date" name="date" value={expense.date} onChange={handleChange} required />
      <input type="text" name="description" placeholder="Description" value={expense.description} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
