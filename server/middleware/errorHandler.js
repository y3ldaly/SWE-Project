// Middleware to handle errors that occur during request processing.
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack to the console for debugging.
  
    // Determine the proper status code to send; default to 500 if status code is not set or if it's 200.
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
      message: err.message, // Send the error message to the client.
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack, // Send a simple emoji if in production to hide error details.
    });
  };
  
  // Export the middleware to be used globally in the app or in specific routes.
  module.exports = errorHandler;