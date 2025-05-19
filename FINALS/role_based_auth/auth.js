const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    // Correctly split the header and get the token
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Use 403 for forbidden/invalid token
        req.user = user; // Attach user payload to request
        next();
    });
}

function authorizationRole(...allowedRoles) {
    // Return the actual middleware function
    return (req, res, next) => {
        // Check if req.user exists and has a role
        if (!req.user || !req.user.role) {
            return res.status(403).json({ message: "Authentication error: User role not found." });
        }
        // Check if the user's role is included in the allowed roles
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: You do not have permission to access this resource." });
        }
        next(); // Role is allowed, proceed to the next middleware/route handler
    };
}

module.exports = { authenticateToken, authorizationRole };