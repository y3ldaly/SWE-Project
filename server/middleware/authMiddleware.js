// Import the jsonwebtoken library for checking token validity.
const jwt = require('jsonwebtoken');

// Middleware function to authenticate token provided in the request headers.
const authenticateToken = (req, res, next) => {
  // Extract the 'Authorization' header from the request.
  const authHeader = req.headers['authorization'];
  // Get the token from the header. It's usually formatted as "Bearer TOKEN".
  const token = authHeader && authHeader.split(' ')[1]; // Splits the header into parts and gets the token part.

  // If there is no token provided, send a 401 Unauthorized status.
  if (token == null) return res.sendStatus(401);

  // Verify the token using the secret key.
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // If the token is invalid or expired, send a 403 Forbidden status.
    req.user = user; // If valid, attach the decoded user to the request object.
    next(); // Move to the next middleware function or route handler.
  });
};

// Export the middleware function for use in other parts of the application.
module.exports = authenticateToken;