const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await User.findOne({ providerId: profile.id });
            if (user) {
                return done(null, user);
            } else {
                const newUser = await User.create({ providerId: profile.id, provider: 'google', displayName: profile.displayName, email: profile.email });
                return done(null, newUser);
            }
        } catch (error) {
            return done(error);
        }
    }
));
passport.use(new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await User.findOne({ providerId: profile.id });
            if (user) {
                return done(null, user);
            } else {
                const newUser = await User.create({ providerId: profile.id, provider: 'google', displayName: profile.displayName, email: profile.email });
                return done(null, newUser);
            }
        } catch (error) {
            return done(error);
        }
        }
));

