const express=require("express");
const jwt=require("jsonwebtoken");
const {authenticateToken,authorizationRole}=require("./auth");
const routers=require("./protected");
const user=require("./Users");
const dotenv=require("dotenv");

const cors = require("cors");
dotenv.config();

const app=express();
app.use(express.json());
app.use(cors());
//login functionality
app.post("/login",(req,res)=>{
    console.log(req.body);
    
    const {username: inputUsername, password: inputPassword, role: inputRole}=req.body;
    const foundUser=user.find(u=>u.username==inputUsername && u.password==inputPassword && u.role==inputRole);
    if(!foundUser){
        return res.status(401).json({message:"Invalid username, password, or role"});
    }
    const accessToken=jwt.sign({username:foundUser.username,role:foundUser.role},process.env.JWT_SECRET,{expiresIn:"1h"});
    res.json({accessToken});


});

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port 3000");
});







