const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
<<<<<<< HEAD
const User = require("../models/User");
const { sendOtp } = require("../services/otpService");

// ========================
// Register a new user + auto send OTP
// ========================
router.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, mobile, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
=======
const User = require("../models/User"); 

// ✅ Register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });
>>>>>>> main

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

<<<<<<< HEAD
    // Create user
    const newUser = new User({
      firstname,
      lastname,
      email,
      mobile,
      password: hashedPassword,
      role
    });
    await newUser.save();

    // ✅ Send OTP
    await sendOtp(newUser);

    res.json({
      message: "✅ User registered successfully. OTP sent for verification.",
      userId: newUser._id
    });
=======
    // Save user
    const newUser = new User({ username, email, password: hashedPassword, role });
    await newUser.save();

    res.json({ message: "✅ User registered successfully", user: newUser });
>>>>>>> main
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

<<<<<<< HEAD
// ========================
// Verify OTP
// ========================
router.post("/verify-otp", async (req, res) => {
  try {
    const { mobile, otp } = req.body;

    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.otp || !user.otpExpires) {
      return res.status(400).json({ message: "No OTP found for this user" });
    }

    // Check OTP validity
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.json({ message: "✅ OTP verified successfully" });
=======
// ✅ Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    res.json({ message: "✅ Login successful", user });
>>>>>>> main
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

<<<<<<< HEAD
console.log("✅ authRoutes loaded");

// Export the router
=======
>>>>>>> main
module.exports = router;
