import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense._id} className="expense-item">
            <p>💰 {expense.amount} | 📅 {expense.date} | 🏷 {expense.category}</p>
            <p>{expense.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ExpenseList;
