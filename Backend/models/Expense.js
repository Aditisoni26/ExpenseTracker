const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: String,
  amount: Number,
  date: String,
});

module.exports = mongoose.model("Expense", expenseSchema);
