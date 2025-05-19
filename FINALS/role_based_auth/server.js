const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import cors
require('dotenv').config(); // Load .env variables
const users = require('./user'); // Import users array
const protectedRoutes = require('./protected'); // Import protected routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Correctly use express.json() middleware

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user by username and password (ensure users array is loaded)
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        // Send a 401 Unauthorized status for login failure
        return res.status(401).json({ message: "Invalid credentials" });
    }

    // User found, create JWT payload
    const payload = {
        username: user.username,
        role: user.role // Ensure role is included in the payload
        // Add other relevant user info if needed, but avoid sensitive data like password
    };

    // Sign the token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Add expiration

    // Send the token and user info (excluding password) back to the client
    res.json({
        token,
        user: {
            username: user.username,
            role: user.role
        }
    });
});

// Use Protected Routes
app.use('/', protectedRoutes); // Mount protected routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});