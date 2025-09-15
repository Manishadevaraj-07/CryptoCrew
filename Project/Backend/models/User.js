const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
=======
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
>>>>>>> main
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ["farmer", "distributor", "retailer", "consumer"], 
    required: true 
  },
<<<<<<< HEAD
  otp: { type: String },                     // Temporary OTP
  otpExpires: { type: Date },                // Expiry time
  isVerified: { type: Boolean, default: false }, // Mobile verification status
=======
>>>>>>> main
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
