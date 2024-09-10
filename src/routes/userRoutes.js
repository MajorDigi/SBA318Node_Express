const express = require('express');
const router = express.Router();

// Handle POST request to create a new user
router.post('/', (req, res) => {
  const { name } = req.body;
  // Logic to create a new user in your database goes here
  // For now, just send a response with the user's name
  res.send(`User ${name} created successfully!`);
});

module.exports = router;
