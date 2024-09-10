// routes/posts.js

const express = require('express');
const router = express.Router();

// Dummy data for demonstration
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first post' },
  { id: 2, title: 'Second Post', content: 'This is the second post' },
];

// GET: Retrieve all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// POST: Create a new post
router.post('/', (req, res) => {
  const newPost = { id: posts.length + 1, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT: Update an existing post by ID
router.put('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], ...req.body };
    res.json(posts[postIndex]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// DELETE: Remove a post by ID
router.delete('/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  posts = posts.filter((p) => p.id !== postId);
  res.status(204).end();
});

module.exports = router;
