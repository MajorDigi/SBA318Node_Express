// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/index'); // Import routes

// Initialize environment variables
dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Set up routes
app.use('/', routes);

// Set the port number from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

