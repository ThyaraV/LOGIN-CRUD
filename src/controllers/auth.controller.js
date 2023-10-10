import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js";

export const register=async(req,res)=>{
    const{email,password,username}=req.body;

    try{
        const passwordHash=await bcrypt.hash(password,10)//strings aleatorios, encriptar contraseña
        const newUser=new User({
            username,
            email,
            password:passwordHash,
        });

        const userSaved=await newUser.save();
        const token=await createAccessToken({id:userSaved._id});

        res.cookie('token',token);
        res.json({
            id:userSaved._id,
            username: userSaved.username,
            email:userSaved.email,
            createdAt:userSaved.createdAt,
            updateAt:userSaved.updatedAt,
        });

    }catch(error){
        res.status(500).json({message:error.message});
    }
    
};

export const login=async(req,res)=>{
    const{email,password}=req.body;

    try{
        const userFound=await User.findOne({email})
        if(!userFound)return res.status(400).json({message:"Usuario no encontrado"});

        const isMatch=await bcrypt.compare(password,userFound.password)
        if(!isMatch) return res.status(400).json({message:"Contraseña incorrecta"});
        
        const token=await createAccessToken({id:userFound._id});

        res.cookie('token',token);
        res.json({
            id:userFound._id,
            username: userFound.username,
            email:userFound.email,
            createdAt:userFound.createdAt,
            updateAt:userFound.updatedAt,
        });

    }catch(error){
        res.status(500).json({message:error.message});
    }
    
};
export const logout=(req,res)=>{
    res.cookie('token',"",{
        expires:new Date(0)
    })
    return res.sendStatus(200);
};

export const profile=async(req,res)=>{
    const userFound= await User.findById(req.user.id)
    if(!userFound)return res.status(400).json({message:"Usuario no encontrado"});
    return res.json({
        id:userFound._id,
        username: userFound.username,
        email:userFound.email,
        createdAt:userFound.createdAt,
        updateAt:userFound.updatedAt,
        
    })
    //console.log(req.user)
    res.send('profile');
}


    
//export const login=(req,res)=>res.send("login");

