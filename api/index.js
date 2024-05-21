import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb connected successfully...");
}).catch((err)=>{
    console.log(`ERROR: ${err}`);
})

const app=express();

const PORT=3000;

//listen:
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})