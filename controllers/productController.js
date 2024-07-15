const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { title, description, inventoryCount } = req.body;
  try {
    const newProduct = await Product.create({ title, description, inventoryCount });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
