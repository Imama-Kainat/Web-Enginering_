const express=require('express');
const bcrypt=require('bcrypt');
const _session=require('express-session');
const dotenv=require('dotenv');
dotenv.config();
const users=require('./users');
const app=express();
app.use(express.json());
app.use(_session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

    