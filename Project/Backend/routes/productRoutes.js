const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Add product
router.post("/add", async (req, res) => {
  const sampleProduct = new Product({
    name: "Test Product",
    price: 100,
    description: "This is a sample product"
  });
  await sampleProduct.save();
  res.json({ message: "Sample product saved!", product: sampleProduct });
});

router.post("/add", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json({ message: "✅ Product added", product: newProduct });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ productId: req.params.id });
  if (!product) return res.status(404).json({ message: "❌ Product not found" });
  res.json(product);
});

module.exports = router;
