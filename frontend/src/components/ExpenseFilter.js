import React, { useState } from "react";

const ExpenseFilter = ({ expenses, setFilteredExpenses }) => {
  const [category, setCategory] = useState("");

  const filterExpenses = () => {
    const filtered = category ? expenses.filter((exp) => exp.category.toLowerCase().includes(category.toLowerCase())) : expenses;
    setFilteredExpenses(filtered);
  };

  return (
    <div className="expense-filter">
      <input type="text" placeholder="Filter by category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button onClick={filterExpenses}>Filter</button>
    </div>
  );
};

export default ExpenseFilter;
