const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: String,
  description: String,
});

module.exports = mongoose.model("Expense", expenseSchema);

