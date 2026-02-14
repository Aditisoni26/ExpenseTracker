const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");

const router = express.Router();

/* ADD EXPENSE */
router.post("/", auth, async(req, res) => {
    try {
        const expense = new Expense({
            userId: req.userId,
            name: req.body.name,
            amount: req.body.amount,
            date: req.body.date,
        });

        await expense.save();
        res.json(expense);
    } catch (err) {
        console.error("Expense Error:", err);
        res.status(500).json({ message: err.message });
    }
});

/* GET ALL EXPENSES */
router.get("/", auth, async(req, res) => {
    const expenses = await Expense.find({ userId: req.userId });
    res.json(expenses);
});

module.exports = router;