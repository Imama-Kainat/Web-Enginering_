const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Make sure the User model is correctly imported

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists in the database
        let user = await User.findOne({ providerId: profile.id });

        if (!user) {
            // If user doesn't exist, create a new user
            user = new User({
                providerId: profile.id,
                providerName: profile.provider,
                displayName: profile.displayName,
                email: profile.emails[0].value
            });

            // Save the new user to the database
            await user.save();
            console.log('New user created:', user);
        } else {
            console.log('Existing user:', user);
        }

        // Pass the user object to the next middleware
        return done(null, user); //eror + profile 
    } catch (err) {
        console.log(err);
        return done(err, null); // Pass the error to the next middleware
    }
}));
