const Product = require("../models/Products");

// Function to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products); // Send the products as a response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to update a product
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct); // Send updated product as a response
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
