const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  providerID:String,
    providerName:String,
    displayName:String,
    email:String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
