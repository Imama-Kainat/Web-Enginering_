import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routers/product.routers.js';

dotenv.config();

const app = express();
const PORT= process.env.PORT || 5000; //use port from env file or use 5000



app.use(express.json());  //allow use to acceept jason data in the req.body

app.use("/api/products",productRoutes);  //prefix for all the routes in product router

app.listen(PORT, async () => {
    await connectDB();
    console.log("server started at http://localhost:"+ PORT);
});