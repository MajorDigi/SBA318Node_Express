// routes/comments.js

const express = require('express');
const router = express.Router();

// Dummy data for demonstration
let comments = [
  { id: 1, postId: 1, content: 'Great post!' },
  { id: 2, postId: 1, content: 'Very informative.' },
];

// GET: Retrieve all comments
router.get('/', (req, res) => {
  res.json(comments);
});

// POST: Create a new comment
router.post('/', (req, res) => {
  const newComment = { id: comments.length + 1, ...req.body };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// PUT: Update an existing comment by ID
router.put('/:id', (req, res) => {
  const commentId = parseInt(req.params.id, 10);
  const commentIndex = comments.findIndex((c) => c.id === commentId);

  if (commentIndex !== -1) {
    comments[commentIndex] = { ...comments[commentIndex], ...req.body };
    res.json(comments[commentIndex]);
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
});

// DELETE: Remove a comment by ID
router.delete('/:id', (req, res) => {
  const commentId = parseInt(req.params.id, 10);
  comments = comments.filter((c) => c.id !== commentId);
  res.status(204).end();
});

module.exports = router;
