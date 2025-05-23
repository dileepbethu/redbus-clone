// backend/routes/auth.js
// const express = require("express");
import express from 'express'
const router = express.Router();
// const User = require("../models/User");
// import User from '../models/User';
import User from '../models/User.js';
// const bcrypt = require("bcryptjs");
import bcrypt from "bcrypt"

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log('Trigred')
  console.log(req.body)
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ msg: "User created", user: newUser });
  } catch (err) {
    res.status(500).json({ msg: "Error creating user" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    res.json({ msg: "Login success", user });
  } catch (err) {
    res.status(500).json({ msg: "Login error" });
  }
});

export default router;
