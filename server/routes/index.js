const express = require('express');
const router = express.Router();

router.post('/register', require('./../controller/auth/register').handleRegister);
router.post('/login', require('./../controller/auth/login').handleLogin);
router.get('/users', require('./../controller/users').fetchUser);


module.exports = { router }