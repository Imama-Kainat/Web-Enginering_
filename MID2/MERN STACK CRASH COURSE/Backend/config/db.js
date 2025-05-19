import mongoose from "mongoose";
import { config } from "dotenv";
export const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process with failure 0 means success, 1 means failure
    }
}