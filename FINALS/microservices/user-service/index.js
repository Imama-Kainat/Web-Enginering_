const express=require('express');
const app=express();

app.use(express.json());

app.get('/users',(req,res)=>{
    res.json([{id:1,name:'John Doe'},{id:2,name:'Jane Doe'}]);
});

app.listen(3001,()=>console.log('User Service is running on port 3001'));

