import type {Request , Response} from 'express';

import * as patientServieces from '../services/patientServieces.js';
// const patientService =require(../services/patientServices);



/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: API for managing patients
 */

/**
 * @swagger
 * /api/patients/users:
 *   get:
 *     summary: Get all patients
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: List of patients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   age:
 *                     type: integer
 *                   medicines:
 *                     type: string
 *                   address:
 *                     type: string
 *       500:
 *         description: Server error
 */


export const deletePatient=async(req: Request,res: Response)=>{
    try{
        const id =parseInt(req.params.id as string);
        if(isNaN(id)){
            return res.status(400).json({message:"Invalid ID"});
        }
        const result=await patientServieces.deletePatients(id);
        if(result.affectedRows ===0){
            return res.status(404).json({message: "Patient not found"});
            
        }

        res.json({message: "Patient deleted successfully"});
    }catch (err:any){
        res.status(500).json({message: err.message});
    }
};
/**
 * @swagger
 * /api/patients/delete/{id}:
 *   delete:
 *     summary: Delete patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Patient ID
 *     responses:
 *       200:
 *         description: Patient deleted successfully
 *       500:
 *         description: Server error
 */

export const updatePatient=async(req:Request,res:Response)=>{
    try{
        const id =parseInt(req.params.id as string);
        const {name,age,medicines,address}=req.body;
        const updatePatient=await patientServieces.modifyPatients(id,
            {
            name,
            age,
            medicines,
            address
        });
        res.json(updatePatient);
    } catch(err:any){
        res.status(500).json({message: err.message});
    }
};
export  const getPatients=async(req: Request,res:Response)=>{
    try{
        const patients=await patientServieces.getPatients();
        res.json(patients);

    }
    catch(err :any){
        res.status(500).send({message: err.message});
    }
};


/**
 * @swagger
 * /api/patients/add:
 *   post:
 *     summary: Add a new patient
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *               - medicines
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               medicines:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Patient added successfully
 *       500:
 *         description: Server error
 */

 export const addPatient=async(req:Request,res:Response)=>{
    try{
        const {name,age,medicines,address}=req.body;
        const result=await patientServieces.createPatient(
           { name,
            age,
            medicines,
            address}
        );
        res.status(201).json(result);
        // res.send('Patient added succssfully');
    }
    /**
 * @swagger
 * /api/patients/update/{id}:
 *   put:
 *     summary: Update patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Patient ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               medicines:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Patient updated successfully
 *       500:
 *         description: Server error
 */
    catch(err:any){
        res.status(500).json({message: err.message});
    }
};
