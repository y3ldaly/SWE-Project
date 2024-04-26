const jwt = require('jsonwebtoken');

// Middleware function to authenticate token provided in the request headers.
const authenticateToken = (req, res, next) => {
  // Extract the 'Authorization' header from the request.
  const authHeader = req.headers['authorization'];
  
  // Check if the authorization header is present and correctly formatted
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    // If there is no token provided or the format is incorrect, send a 401 Unauthorized status.
    return res.sendStatus(401);
  }

  // Get the token from the header. It's usually formatted as "Bearer TOKEN".
  const token = authHeader.split(' ')[1]; // Splits the header into parts and gets the token part.

  // Verify the token using the secret key.
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      // Provide more detailed error information based on the type of JWT error
      const message = err.name === "JsonWebTokenError" ? "Invalid token" :
                      err.name === "TokenExpiredError" ? "Token expired" : "Token not active";
      // If the token is invalid or expired, send a 403 Forbidden status with the error message.
      return res.status(403).send({ message });
    }
    // If valid, attach the decoded user to the request object.
    req.user = user;
    next(); // Move to the next middleware function or route handler.
  });
};

// Export the middleware function for use in other parts of the application.
module.exports = authenticateToken;