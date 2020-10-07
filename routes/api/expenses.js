// create, : index, : show, : update, : destroy
const express = require("express");
const router = express.Router();
const passport = require("passport");
const Expense = require("../../models/Expense");
const validateExpenseInput = require("../../validation/expense"); //notyetvalidated

router.get("/:userId", (req, res) => {
    Expense.find({ userId: req.params.userId }).then((expenses) =>
        res.json(
            expenses.map((expense) => {
                return {
                    amount: expense.amount,
                    date: expense.date,
                    id: expense.id,
                };
            })
        )
    );
});

// router.get("/", (req, res) => {
//   Expense.find((error, expenses) => {
//     if (error) return res.status(404).json({ NoExpense: "No record of any expense." });

//     res.json(expensess.map((expenses) => {
//       return ({
//         price: expense.price,
//         date: expense.date,
//         id: expense.id
//       })
//     }));
//   });
// });


router.post(
    "/new",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validateExpenseInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newExpense = new Expense({
            price: req.body.price,
            userId: req.user.id,
        });
        newExpense.save().then((expenses) => res.json(expenses));
    }
);

router.delete("/:expenseId", (req, res) => {
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

