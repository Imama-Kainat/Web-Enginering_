const express = require('express');
const { authenticateToken, authorizationRole } = require('./auth'); // Correct path
const router = express.Router();

// Define routes correctly

// Profile route (accessible to any authenticated user)
router.get('/profile', authenticateToken, (req, res) => {
    // Send back user information from the token payload
    res.json({ user: req.user, message: "Profile data accessed" });
});

// Admin route (only accessible to users with 'admin' role)
router.get('/admin', authenticateToken, authorizationRole('admin'), (req, res) => {
    res.json({ message: "Admin data accessed", adminSpecificData: "some admin info" });
});

// Editor route (accessible to users with 'admin' or 'editor' role)
router.get('/editor', authenticateToken, authorizationRole('admin', 'editor'), (req, res) => {
    res.json({ message: "Editor data accessed", editorSpecificData: "some editor info" });
});

module.exports = router; // Correct export

