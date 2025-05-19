// ✅ middleware for authentication & role-based auth
const jwt = require('jsonwebtoken');
require('dotenv').config();
// This middleware authenticates the user by verifying their JWT.
function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}
// This function checks the user’s role and allows access based on it.
function authenticationRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) return res.sendStatus(401);
        if (!allowedRoles.includes(req.user.role)) return res.sendStatus(403);
        next();
    };
}

module.exports = {
    authenticationToken,
    authenticationRole
};
