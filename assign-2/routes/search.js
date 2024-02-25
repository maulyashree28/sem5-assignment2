// routes/search.js

const express = require('express');
const BlogPost = require('../models/BlogPost');

const router = express.Router();

router.get('/posts', async (req, res) => {
  const { query } = req.query;
  try {
    const posts = await BlogPost.find({ title: { $regex: query, $options: 'i' } });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;