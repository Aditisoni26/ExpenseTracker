const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.router();


router.post("/signup", async(req, res) => {
    const { name, username, email, password } = req.body;

    if (!username) {
        return res.status(400).json({ message: "Username required" });
    }
    const existing = await User.findOne({
        $or: [{ email }, { username }]
    });
    if (existing) {
        return
    }
});