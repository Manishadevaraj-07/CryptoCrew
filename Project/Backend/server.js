const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// ✅ Product routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// ✅ Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// 🔍 Debug: check if .env is loading
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

// ✅ Test route
app.get("/", (req, res) => {
    res.send("Hello from Product Tracer App 🚀");
});

// ✅ Use PORT from .env (fallback to 5000 if not set)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
