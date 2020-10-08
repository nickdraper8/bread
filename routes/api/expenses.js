// create, : index, : show, : update, : destroy
const express = require("express");
const router = express.Router();
const Expense = require("../../models/Expense");

router.get("/:userId", (req, res) => {
    debugger 
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


router.post("/new", (req, res) => {

        const newExpense = new Expense({

            amount: req.body.price,
            userId: req.body.userId,
        });
        newExpense.save().then((expenses) => res.json(expenses));
    }
);
router.get("/:id/expense", (req, res) => {
  Expense.find({ id: mongoose.ObjectId(req.params.id) })
    .select("price")
    .then((expense) => {
      return res.json(expense);
    });
});

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

