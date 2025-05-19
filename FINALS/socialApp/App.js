const express= require('express');
const passport= require('passport');
const session= require('express-session');
const mongoose= require('mongoose');
const dotenv= require('dotenv').config();
const app= express();
mongoose.connect(process.env.MONGO_URI, require('/routes/auth.js'));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('index');
});
app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/'); // Redirect to home if not authenticated
    }
  res.render(profile, { user: req.user }); // Render profile page with user data
});

app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err); // Handle error during logout
        }
        res.redirect('/'); // Redirect to home after logout
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
}
);

// const express = require('express'); // Importing Express framework
// const passport = require('passport'); // Importing Passport for social auth
// const session = require('express-session'); // To handle user sessions (login persistence)
// const mongoose = require('mongoose'); // Mongoose helps connect and manage MongoDB
// const dotenv = require('dotenv').config(); // Loads your .env file (for secret keys)

// const app = express(); // Creates an Express server

// // ✅ Connect to MongoDB using Mongoose and secret URI from .env
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // ✅ Middleware to parse JSON body
// app.use(express.json());

// // ✅ Initializes Passport.js
// app.use(passport.initialize());

// // ✅ Connects Passport with session support
// app.use(passport.session());
