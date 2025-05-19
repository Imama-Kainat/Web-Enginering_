const mongoose= require('mongoose'); // Importing Mongoose for MongoDB interaction
const UserScehma= new mongoose.Schema({ // Creating a new Mongoose schema for User
    providerId: String, // Provider ID for the user
    providername: String, // Provider name (e.g., Google, Facebook)
    displayName: String, // User's display name
    email: String, // User's email address
});

module.exports= mongoose.model('User', UserScehma); // Exporting the User model