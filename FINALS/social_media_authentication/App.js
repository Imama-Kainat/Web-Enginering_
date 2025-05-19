const express=require('express');
const passport=require('passport');
const dotenv=require('dotenv');
const session=require('express-session');
const mongoose=require('mongoose');
dotenv.config();
const app=express();
mongoose.connect(process.env.MONGO_URI, {   useNewUrlParser: true, useUnifiedTopology: true });




require('./routes/auth');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('view_engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('profile.ejs', { user: req.user });
});
app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

