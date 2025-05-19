const express=require('express');
const app=express();

app.use(express.json());


app.get('/orders',(req,res)=>{
    res.json([{id:1,name:'Order 1'},{id:2,name:'Order 2'}]);
});

app.listen(3002,()=>console.log('Order Service is running on port 3002'));


