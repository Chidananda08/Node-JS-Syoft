const express = require('express');
const { register, login } = require('../controllers/authController');
const { createProduct, getProducts } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/products', authMiddleware, createProduct);
router.get('/products', authMiddleware, getProducts);

module.exports = router;
