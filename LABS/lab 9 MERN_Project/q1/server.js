const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Student = require('./models/Student');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/students');

// API: Check if email exists
app.get('/api/students/check-email/:email', async (req, res) => {
  const student = await Student.findOne({ email: req.params.email });
  res.json({ exists: !!student });
});

// API: Register student
app.post('/api/students/register', async (req, res) => {
  const { name, email, password, department } = req.body;
  const studentExists = await Student.findOne({ email });

  if (studentExists) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const student = new Student({ name, email, password, department });
  await student.save();
  res.json({ message: 'Student registered successfully' });
});

// Start the server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
