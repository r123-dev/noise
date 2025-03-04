const express = require("express");
const router = express.Router();
const Expense = require("../models/expenseModel");

router.post("/", async (req, res) => {
  const newExpense = new Expense(req.body);
  const savedExpense = await newExpense.save();
  res.json(savedExpense);
});

router.get("/", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

module.exports = router;
