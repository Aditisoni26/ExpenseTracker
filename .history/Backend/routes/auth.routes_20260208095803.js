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
        return res.status(400).json({ message: "User already exists" });
    }
    const hashed = await bcrypt.hash(password, 10);

    await User.create({
        name,
        username,
        email,
        password: hashed
    });

    res.json({ message: "Registered" });
});