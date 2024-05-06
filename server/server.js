const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorMiddleware = require('./middleware/errorMiddleware');
dotenv.config();
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const menuRoutes = require('./routes/menuRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());

// Middleware to accept JSON in the request bodies
app.use(express.json());

app.use('/api/users', userRoutes);
//app.use('/api/transactions', transactionRoutes);
app.use('/api/menu', menuRoutes);
//app.use('/api/feedback', feedbackRoutes);

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});