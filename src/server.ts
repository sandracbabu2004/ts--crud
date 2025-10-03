import express from 'express';
// import type {  Request, Response} from"express";
import patientsRoutes from './routes/patientsRoutes.js';
import { setupSwagger } from './swagger.js';
const app=express();
app.use(express.json());

const PORT =4000;
app.use((req,res,next)=>{
    console.log(`Incoming ${req.method} request to ${req.url}`);
    console.log('Body:',req.body);
    next();
})
// const users=[
//     {id:1,name:"Sandra"},
//     {id:2,name:"Ardra"}
// ];
// app.get("/users",(req,res)=>{
//     res.json(users);
// });


app.use('/api/patients',patientsRoutes);
 
setupSwagger(app);

app.get("/",(req,res)=>{
    res.send("Hello TS + Express");
});

// app.use(express.json());
// const PORT=4000;
// app.get("/",(Request,res:Response)=>{
//     res.send("Hello Express + Typescript");
    // res.json([{id:1,name:"Sandra"}]);
// });
// app.post("/users",(req,res)=>{
//     const{name}=req.body;
//     if (!name){
//         return res.status(400).json({error:"Name is required"});
//     }
//     const newUser={
//         id:users.length+1,name,
//     };
//     users.push(newUser);
//     res.status(201).json(newUser);
// });
// app.put("/users/:id",(req,res)=>{
//     const id=parseInt(req.params.id);
//     const {name}=req.body;
//     const user=users.find(u=>u.id===id);
//     if (!user){
//         return res.status(404).json({error:"user not found"});
//     }
//     if (!name){
//         return res.status(400).json({error:"Name is required"});
//     }
//     user.name= name;
//     res.json(user);

// });

// app.delete("/users/:id",(req,res)=>{
//     const id=parseInt(req.params.id);
//     const index=users.findIndex(u=>u.id===id);
//     if(index===-1){
//         return res.status(404).json({error:"user not found"});
//     }
//     const deletedUser=users.splice(index,1);
//     res.json(deletedUser[0]);
// });
app.listen(4000,()=>{
    console.log(`server running on http://localhost:4000`);
    const newLocal = `swagger docs available at http://localhost:4000`;
    console.log(newLocal)
});
