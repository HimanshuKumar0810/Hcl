// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Allow us to parse JSON bodies

// Basic Route (Test if server is working)
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Healthcare Wellness API" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});