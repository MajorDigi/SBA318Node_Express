// routes/users.js

const express = require('express');
const router = express.Router();

// Dummy data for demonstration
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// GET: Retrieve all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST: Create a new user
router.post('/', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT: Update an existing user by ID
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// DELETE: Remove a user by ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  users = users.filter((u) => u.id !== userId);
  res.status(204).end();
});

module.exports = router;
