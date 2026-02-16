//
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

/* SIGNUP */
router.post("/signup", async(req, res) => {
    try {
        const { name, username, email, password } = req.body;

        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields required" });
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

        res.status(201).json({ message: "Registered successfully" });
    } catch (err) {
        console.error("SIGNUP ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
});

/* LOGIN */
router.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id },
            process.env.JWT_SECRET, { expiresIn: "7d" }
        );

        res.json({ token });
    } catch (err) {
        console.error("LOGIN ERROR:", err);
        res.status(500).json({ message: "Server error" });
    }
});

/* GET CURRENT USER */
router.get("/me", auth, async(req, res) => {
    const user = await User.findById(req.user).select("-password");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});

module.exports = router;