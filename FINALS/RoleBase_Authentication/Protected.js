// protected.js defines routes that require authentication and role checks.
const express = require('express');
const { authenticationToken, authenticationRole } = require('./Auth'); // assuming auth.js
const router = express.Router();

// 1. Profile route for both admin and user
router.get('/profile', authenticationToken, authenticationRole('admin', 'user'), (req, res) => {
    res.json({ message: 'Welcome to your profile' });
});

// 2. Admin-only route
router.get('/admin', authenticationToken, authenticationRole('admin'), (req, res) => {
    res.json({ message: 'Welcome to your admin profile' });
});

// 3. User-only route
router.get('/user', authenticationToken, authenticationRole('user'), (req, res) => {
    res.json({ message: 'Welcome to your user profile' });
});

// 4. Editor-only route
router.get('/editor', authenticationToken, authenticationRole('editor'), (req, res) => {
    res.json({ message: 'Welcome to your editor profile' });
});

module.exports = router;
