// Import validationResult from express-validator to handle validation results.
const { validationResult } = require('express-validator');

// Middleware to validate request fields based on defined validation rules in routes.
const validateRequest = (req, res, next) => {
  // Run the validation and store the result.
  const errors = validationResult(req);
  // If there are any validation errors, return a 400 Bad Request with the errors.
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // If no errors, proceed to the next middleware or handler.
};

// Export the middleware to be used wherever request validation is needed.
module.exports = validateRequest;