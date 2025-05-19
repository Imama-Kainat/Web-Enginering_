// Import required modules


// The user sends a login request 
// → Gets a token → Makes authenticated requests 
// → Role-based access is checked before allowing access to specific routes.


// 📈 Flow of Requests (Step-by-Step)
// 1. User Logs In
// User sends a POST /login request with a username and password.

// The server checks credentials and if valid, sends back a JWT token.

// 2. User Makes a Protected Request
// The user includes the JWT token in the Authorization header (e.g., Bearer token).

// The server uses the authenticationToken middleware to verify the token.

// The server checks if the role (e.g., 'admin') in the token matches the required role using authenticationRole.

// 3. Access Granted or Denied
// If the role matches and the token is valid, the route handler is executed, and the user gets a response.

// If the role doesn’t match or the token is invalid, the user gets a 403 Forbidden or 401 Unauthorized response.
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
// const authRoutes = require('.Auth'); // Assuming your routes are in routes/authRoutes.js
// const protectedRoutes = require('./Protected'); // Assuming your routes are in routes/protectedRoutes.js
// const userRoutes = require('./User'); // Assuming your routes are in routes/userRoutes.js

// // Load environment variables from .env file
// dotenv.config();

// // Initialize Express app
// const app = express();

// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     // Validate username and password
//     const user=user.find((u) => u.username === username && u.password === password);
//     if (!user) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
//     res.json({ token }); // Return the token to the client
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`🚀 Server started on port ${PORT}`);

// });
const path = require('path');
const express = require('express');            // Import express
const jwt = require('jsonwebtoken');           // Import jsonwebtoken
const dotenv = require('dotenv');              // Load environment variables
const users = require('./user');               // Your user data
const protectedRoutes = require('./protected'); // Your protected router

dotenv.config(); // Initialize dotenv

const app = express();

// 1. Parse JSON bodies
app.use(express.json());

// 2. Serve all static files (HTML, CSS, JS) from project root
app.use(express.static(path.join(__dirname)));

// 3. Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

// 4. Mount protected routes for profile, admin, editor
app.use('/', protectedRoutes);

// 5. Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    // Server is running on port ${PORT} — http://localhost:${PORT}/
  );
});