import express from 'express';

const app=express();

const PORT=3000;

//listen:
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
})