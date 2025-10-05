import type {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET="your_secret_key_here";
export interface AuthRequest extends Request {
    user?: any;

}

export const authenticateJWT=(req:AuthRequest,res:Response,next:NextFunction)=>{
const authHeader=req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer")){
    return res.status(401).json({message:"Authorization token missing"});
}
const token=authHeader.split(" ")[1];
if(!token){
    return res.status(401).json({message:"Authorization token missing"});
}
try{
const decoded=jwt.verify(token,JWT_SECRET);
req.user=decoded;
next();
} catch (error){
    return res.status(403).json({message:"Invalid token"});
}
};