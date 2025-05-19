const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/blog-app')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Create blog
app.post('/api/blogs', async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json({ message: 'Blog saved successfully' });
});

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Get single blog by ID
app.get('/api/blogs/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: 'Blog not found' });
  res.json(blog);
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
