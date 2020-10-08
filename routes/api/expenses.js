// create, : index, : show, : update, : destroy
const express = require("express");
const router = express.Router();
const Expense = require("../../models/Expense");
const mongoose = require("mongoose");

router.get("/:userId", (req, res) => {

  Expense.find({ id: mongoose.ObjectId(req.params.userId) })
    .select("amount date")
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
        id: expenses.id
      })
    }));
  });
});

router.post("/new", (req, res) => {
  const newExpense = new Expense({
    description: req.body.description,
    amount: req.body.amount,
    payer_id: req.body.user_id,
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5c4d43815e6959922d1e04bf9d3798bc69583a2a
      }
      return res.send({ message: "Expenses successfully deleted" });
    })
    .catch((err) => {
      res.status(400).send({ message: "Could not delete expense" });
<<<<<<< HEAD
=======
=======
>>>>>>> 5c4d43815e6959922d1e04bf9d3798bc69583a2a
        newExpense.save().then((expenses) => res.json(expenses));
    });
});

<<<<<<< HEAD
router.get("/:id/expense", (req, res) => {
  Expense.find({ id: mongoose.ObjectId(req.params.id) })
    .select("price")
    .then((expense) => {
      return res.json(expense);
>>>>>>> f57f3b561daf4404aa61c4c70eceb00f7bfa6071
    });
});

=======
>>>>>>> 5c4d43815e6959922d1e04bf9d3798bc69583a2a
module.exports = router;
