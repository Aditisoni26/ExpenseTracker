//expesnse.routes.j
const express = require("express");
const Expense = require("../models/Expense");
const auth = require("../middleware/auth");

const router = express.Router();

/* ADD EXPENSE */
router.post("/", auth, async(req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("USER ID:", req.userId);

        const expense = new Expense({
            userId: req.userId,
            name: req.body.name,
            amount: req.body.amount,
            date: req.body.date,
            category: req.body.category,
        });

        await expense.save();
        res.json(expense);
    } catch (err) {
        console.error("EXPENSE ERROR:", err);
        res.status(500).json({ message: err.message });
    }
});


/* GET ALL EXPENSES */
router.get("/", auth, async(req, res) => {
    const expenses = await Expense.find({ userId: req.userId });
    res.json(expenses);
});
/* DELETE EXPENSE */
router.delete("/:id", auth, async(req, res) => {
    try {
        const expense = await Expense.findOneAndDelete({
            _id: req.params.id,
            userId: req.userId,
        });

        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.json({ message: "Expense deleted" });
    } catch (err) {
        console.error("DELETE ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
});



module.exports = router;