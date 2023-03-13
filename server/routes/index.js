const express = require('express');
const router = express.Router();

router.post('/register', require('./../controller/auth/register').handleRegister);
router.post('/login', require('./../controller/auth/login').handleLogin);
router.post('/users', require('./../controller/users').fetchUser);
router.get('/products', require('./../controller/products').fetchProducts);
router.post('/cardDetails', require('./../controller/cardDetails').handleAddToCard);

module.exports = { router }