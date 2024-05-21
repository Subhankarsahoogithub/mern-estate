import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb connected successfully...");
}).catch((err)=>{
    console.log(`ERROR: ${err}`);
})

const app=express();


app.use(express.json());

const PORT=3000;

//listen:
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)