const express = require('express');
const cardRoutes = require('./routes/cardRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(cardRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
