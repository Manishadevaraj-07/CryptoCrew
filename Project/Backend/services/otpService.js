// services/otpService.js
const twilio = require("twilio");
const User = require("../models/User");
require("dotenv").config();

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);
const twilioNumber = process.env.TWILIO_NUMBER;

async function sendOtp(user) {
  // Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP and expiry
  user.otp = otp;
  user.otpExpires = Date.now() + 5 * 60 * 1000; // 5 min
  await user.save();

  // Send SMS
  await client.messages.create({
    body: `Your OTP is ${otp}. It is valid for 5 minutes.`,
    from: twilioNumber,
    to: `+91${user.mobile}`
  });
}

module.exports = { sendOtp };
