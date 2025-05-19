const express=require('express');
const {createProxyMiddleware}=require('http-proxy-middleware');

const app=express();

app.use('/js',createProxyMiddleware({target:'http://js_service:3001',
    changeOrigin:true,
    secure:false

    
}));

app.use('/python',createProxyMiddleware({target:'http://python-service:3002',
    changeOrigin:true,
    secure:false

    
}));
app.listen(3000,()=>console.log('API Gateway is running on port 3000'));
