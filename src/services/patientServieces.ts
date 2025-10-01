import * as patientRepo from '../respositories/patientRepository.js';
export const modifyPatients =(id:number,data:{name?:string;age?:number;medicines?:string;address?:string})=>{
    return patientRepo.updatePatient(id,data);
};
export const getPatients=async()=>{
    return await patientRepo.getAllPatients();

};
 export const createPatient =async (data:{name:string,age:number,medicines:string,address:string})=>{
    if(!data.name || !data.age) throw new Error('Missing required fields');
    return await patientRepo.addPatient(data.name,data.age,data.medicines,data.address
    );
 };
 export const deletePatients=(id:number)=>{
    return patientRepo.deletePatient(id);
 };
