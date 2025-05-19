const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ['admin', 'user', 'editor'],
    default: 'user'
  }
});

module.exports = mongoose.model('User', userSchema);
