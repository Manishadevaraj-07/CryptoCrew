const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // unique login name
  email: { type: String, required: true, unique: true },    // optional but recommended
  password: { type: String, required: true },               // hashed password
  role: { 
    type: String, 
    enum: ["farmer", "distributor", "retailer", "consumer"], 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
