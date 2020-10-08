// create, : index, : show, : update, : destroy
const express = require("express");
const router = express.Router();
const Expense = require("../../models/Expense");
const mongoose = require("mongoose");

router.get("/:userId", (req, res) => {

  Expense.find({ id: mongoose.ObjectId(req.params.userId) })
    .select("amount date description payer_id")
    .then((expense) => {
      return res.json(expense);
    });
});

router.get("/", (req, res) => {
  Expense.find((error, expenses) => {
    if (error) return res.status(404).json({ NoExpense: "No record of any expense." })
    res.json(expenses.map((expenses) => {
      return ({
        price: expenses.amount,
        date: expenses.date,
        id: expenses.id,
        payer_id: expenses.payer_id
      })
    }));
  });
});

router.post("/new", (req, res) => {
  const newExpense = new Expense({
    description: req.body.description,
    amount: req.body.amount,
    payer_id: req.body.payer_id,
    event_id: req.body.event_id
  });
  newExpense.save().then((expenses) => res.json(expenses));
});

router.delete("/delete/:expenseId", (req, res) => {
  Expense.findByIdAndRemove(req.params.expenseId)
    .then((expenses) => {
      if (!expenses) {
        return res.status(404).send({
          message: "Expenses not found",
        });
      }
      return res.send({ message: "Expenses successfully deleted" });
    })
    .catch((err) => {
      res.status(400).send({ message: "Could not delete expense" });
        newExpense.save().then((expenses) => res.json(expenses));
    });
});

module.exports = router;
