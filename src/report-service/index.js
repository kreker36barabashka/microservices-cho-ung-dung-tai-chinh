const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/reportService', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.get('/reports', (req, res) => {
    res.send('Fetching reports...');
});

app.listen(PORT, () => {
    console.log(`Report Service running on port ${PORT}`);
});