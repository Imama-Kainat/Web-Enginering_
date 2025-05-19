const express=require('express');
const session=require('express-session');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();// global variable initialize ho gai 
const users=require('./user.js');
const app=express();
app.use(express.json());//avialable in all modules of my application 

app.use( sesion ({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {secure:false} //https only 
}))

function generateToken(user){
    return jwt.sign({id:user.id,email:user.email},process.env.JWT_SECRET,{expiresIn:'15m'});
    
}

app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    const user=users.find(user=>user.email===email);
    if(!user){
        // res.status(404).json({message:'User not found'});//ager return nai lgate ge to time out ka eror de ga wo busy situation me reahe ga budy sdeta rahe ga 
        return res.status(401).json({message:'Invalid email or password'});
    }
    //compare paswordd hash to pasword 
    const isMatch=bcrypt.compareSync(password,user.password);
    //rounds yad rakhne prete he hashing krte he brute force 
    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'});
    }
    const token=generateToken(user);
    return res.status(200).json({token});
    req.session.token=token;
   //jwt ki key client ki local storage ya cookie me hi bs store ho g wo sb header me hou ga 
})

app.post('/profile',(req,res)=>{
    const token=req.headers.authorization;
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=users.find(user=>user.id===decoded.id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(401).json({message:'Unauthorized'});
    }


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

// Flow of becrypt and jwt 
// User signs up → password is hashed using bcrypt.

// User logs in → password is checked with bcrypt.

// If password matches → create JWT token.

// User sends JWT with every request to protected APIs.

// Server checks if the JWT is valid and lets the user in.


// 🔥 Real-Life Analogy====================================


// bcrypt = Locking the user’s password in a safe.

// 🪪 JWT = Giving the user an ID card to access services.

///backend flow ================================== 
// 1️⃣	User signs up	bcrypt.hashpw() to hash password
// 2️⃣	Password stored securely in DB	No plain text password ever saved
// 3️⃣	User logs in	bcrypt.checkpw() to verify
// 4️⃣	JWT created if login successful	jwt.encode() with user info
// 5️⃣	Token sent to frontend	Stored in localStorage/cookies
// 6️⃣	Frontend sends token with requests	In headers like Authorization: Bearer <token>
// 7️⃣	Backend verifies token	jwt.decode() to check identity
// 8️⃣	Access granted/denied	Based on token validity