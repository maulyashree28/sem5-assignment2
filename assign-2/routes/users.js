// routes/users.js

const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Implement other CRUD operations for users (GET by ID, DELETE, etc.) here

module.exports = router;