const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('Job', jobSchema);
