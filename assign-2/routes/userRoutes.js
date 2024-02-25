// routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users', userController.createUser);
// Define other user routes (GET, PUT, DELETE) here

module.exports = router;