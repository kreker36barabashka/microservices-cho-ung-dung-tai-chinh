const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/budgetService', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.get('/budgets', (req, res) => {
    res.send('Fetching budgets...');
});

app.listen(PORT, () => {
    console.log(`Budget Service running on port ${PORT}`);
});