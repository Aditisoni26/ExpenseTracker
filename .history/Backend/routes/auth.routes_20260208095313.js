const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.router();


router.post("/signup", async(req, res) => {
    const {}
});