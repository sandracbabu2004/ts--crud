import type {Request,Response} from "express";
import * as userService from "../services/userService.js";

export const registerUser=async(req:Request,res:Response)=>{
    try{
        const {name,email,password} =req.body;
        const user=await userService.registerUser(name,email,password);
        res.status(201).json(user);
    } catch (error:any){
        res.status(400).json({message:error.message});
    }
};

export const loginUser=async (req:Request,res:Response)=>{
    try{
        const{email,password}=req.body;
        const result=await userService.loginUser(email,password);
        res.status(200).json(result);
    }catch (error:any){
        res.status(400).json({message:error.message});
    }
};
