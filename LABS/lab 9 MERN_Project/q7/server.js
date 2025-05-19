const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/auth-app')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Seed user (run once)
app.get('/api/seed-user', async (req, res) => {
  await User.deleteMany();
  const user = new User({
    email: 'test@example.com',
    password: '123456',
    name: 'Test User'
  });
  await user.save();
  res.send('✅ User seeded');
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ id: user._id });
});

// Get user info by ID
app.get('/api/user/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ name: user.name, email: user.email });
});

// Optional: redirect root to login
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
