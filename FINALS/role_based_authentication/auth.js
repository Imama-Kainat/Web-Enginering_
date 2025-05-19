const express=require("express");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();

function authenticateToken(req,res,next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(403).json({message:"Forbidden"});
        }
        req.user=user;
        next();
    });
}

function authorizationRole(...allowedRoles){
    return (req, res, next) => {
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"Forbidden"});
        }
        next();
    };
}

module.exports={authenticateToken,authorizationRole};










