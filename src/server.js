// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize environment variables
dotenv.config();

// Create an Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.static('Public')); // Serve static files from the Public directory

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Link route files
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Use routes from the route files
app.use('/users', userRoutes); // Define base URL for user routes
app.use('/posts', postRoutes); // Define base URL for post routes
app.use('/comments', commentRoutes); // Define base URL for comment routes

// Define a route to render the form view
app.get('/create-user', (req, res) => {
  res.render('createUser'); // Render the EJS view for creating a user
});

// Error-handling middleware for 404 - Not Found
app.use((req, res, next) => {
  const error = new Error('Resource Not Found');
  error.status = 404;
  next(error); // Forward the error to the next middleware (global error handler)
});

// Global error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error', // Error message to be sent in response
  });
});

// Set the port number from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
