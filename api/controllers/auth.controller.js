import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signUp=async(req,res)=>{ 
    try {
        const {username,password,email}=req.body;
        const hashedPassword=bcryptjs.hashSync(password,10);
        const newUser =new User({username,password:hashedPassword,email})
        await newUser.save();
       res.status(201).json({
             "msg":"saved on db"
        })
    } catch (error) {
        res.status(401).json({
            "error":"true",
            "msg":error.message
        })
    }
}