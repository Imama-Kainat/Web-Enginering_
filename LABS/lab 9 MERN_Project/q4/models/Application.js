const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  name: String,
  email: String,
  resumeLink: String
});

module.exports = mongoose.model('Application', applicationSchema);
