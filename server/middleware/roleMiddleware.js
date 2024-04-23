// Middleware to check if the logged-in user's role matches any of the roles required to access a route.
const checkRole = (roles) => (req, res, next) => {
    if (!req.user) return res.sendStatus(401); // If no user is attached to the request (not authenticated), send a 401 Unauthorized.
  
    const userRole = req.user.role; // Extract the user's role from the request object.
  
    if (roles.includes(userRole)) {
      next(); // If the user's role is in the allowed roles, proceed to the next middleware or handler.
    } else {
      res.status(403).json({ message: "Access denied. Insufficient permissions." }); // Otherwise, send a 403 Forbidden with a message.
    }
  };
  
  // Export the checkRole function for use in routes.
  module.exports = checkRole;