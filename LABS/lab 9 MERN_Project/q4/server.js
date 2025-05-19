const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const Job = require('./models/Job');
const Application = require('./models/Application');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/job-portal')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// GET jobs
app.get('/api/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// POST application
app.post('/api/apply', async (req, res) => {
  try {
    const appData = new Application(req.body);
    await appData.save();
    res.status(201).json({ message: 'Application submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Error submitting application' });
  }
});

// GET applicants by jobId
app.get('/api/applicants/:jobId', async (req, res) => {
  const applicants = await Application.find({ jobId: req.params.jobId });
  res.json(applicants);
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
