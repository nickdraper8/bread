// create, : index, : show, : update, : destroy
const express = require("express");
const router = express.Router();
const Expense = require("../../models/Expense");
const mongoose = require("mongoose");

// expense that belongs to a user
router.get("/:userId", (req, res) => {
     
    Expense.find({ userId: req.params.userId }).then((expenses) =>

        res.json(
            expenses.map((expense) => {
                return {
                    amount: expense.price,
                    date: expense.date,

                };
            })
        )
    );
});
// find an expense
 router.get("/:id", (req, res) => {
   Expense.find((error, expenses) => {
     if (error) return res.status(404).json({ NoExpense: "No record of any expense." })
     res.json(expenses.map((expenses) => {
       return {
         price: expense.price,
         date: expense.date,
         userId: req.body.userId,
       };
     }));
   });
 });

// create a new
router.post("/new", (req, res) => {

        const newExpense = new Expense({
          amount: req.body.price,
          date: expense.date,
          userId: req.body.userId,
        });
        newExpense.save().then((expenses) => res.json(expenses));
    }
);
// given expense finds the event it belongs too
router.get("/:id", (req, res) => {
    debugger
  Event.find({ id: mongoose.ObjectId(req.params.id) })
    .select("price")
    .then((expense) => {
      return res.json(expense);
    });
});

router.delete("/:id, (req, res) => {
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
        });
});

module.exports = router;

