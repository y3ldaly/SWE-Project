const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorMiddleware = require('./middleware/errorMiddleware');
// Import Routes
// ...
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());

// Middleware to accept JSON in the request bodies
app.use(express.json());

// Use Routes
// ...

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});