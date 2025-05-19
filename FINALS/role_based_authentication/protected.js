const express=require("express");
const {authenticateToken,authorizationRole}=require("./auth");
const routers=express.Router();

routers.get("/profile",authenticateToken,(req,res)=>{
    res.json({
        message:"Profile",
    });
});
routers.get("/admin",authenticateToken,authorizationRole("admin"),(req,res)=>{
    res.json({
        message:"Admin",
    });
});
routers.get("/editor",authenticateToken,authorizationRole("admin","editor"),(req,res)=>{
    res.json({
        message:"Editor",
    });
});
module.exports=routers;












