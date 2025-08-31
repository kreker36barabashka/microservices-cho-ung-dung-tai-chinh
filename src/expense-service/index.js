const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/expenseService', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.get('/expenses', (req, res) => {
    res.send('Fetching expenses...');
});

app.listen(PORT, () => {
    console.log(`Expense Service running on port ${PORT}`);
});