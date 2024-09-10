const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('This is the Home Page!');
});

// Add more routes here as needed
module.exports = router;

