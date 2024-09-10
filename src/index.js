// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware example
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
