import type {User} from "../models/userModel.js";
import {v4 as uuidv4} from "uuid";
const users:User[]=[];

export const createUser=async(name:string,email:string,password:string): Promise<User>=>{
    const newUser: User={
        id:uuidv4(),
        name,
        email,
        password,
        createdAt:new Date(),
    };
    users.push(newUser);
    return newUser;
};

export const findUserById=async(id:string):Promise<User| undefined>=>{
    return users.find((u)=>u.id===id);
};
 
export const getAllUsers=async(): Promise<User[]>=>{
    return users;
};

