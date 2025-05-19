const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Todo = require('./models/Todo');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo-app')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

// GET all todos
app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find().sort({ _id: -1 });
  res.json(todos);
});

// POST new todo
app.post('/api/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.status(201).json(todo);
});

// PUT update todo (text or status)
app.put('/api/todos/:id', async (req, res) => {
  const { text, done } = req.body;
  const update = {};
  if (text !== undefined) update.text = text;
  if (done !== undefined) update.done = done;
  const updated = await Todo.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json(updated);
});

// DELETE todo
app.delete('/api/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
