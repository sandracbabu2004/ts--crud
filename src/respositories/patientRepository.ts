
import {db} from '../db.js'; 


import type {Connection,RowDataPacket, OkPacket} from "mysql2";



export const updatePatient=(
    id:number,
    data: {name?:string;age?:number;medicines?:string;address?:string}
): Promise<OkPacket>=>{
    return new Promise((resolve, reject) => {
        db.query<OkPacket>(
            "UPDATE patients SET name=?,age=?,medicines=?,address=? WHERE id=?",
            [data.name,data.age,data.medicines,data.address,id],
            (err,result)=>{
                if(err)reject(err);
                else resolve(result);
            }
        );
        
    });
};

export const getAllPatients=() : Promise<RowDataPacket[]>=> {
    return new Promise((resolve,reject)=>{
       db.query<RowDataPacket[]>(
        'SELECT * FROM patients',
       
           (err,results)=>{
            if(err)
               return reject(err);
           resolve(results);
 
        }
    );
       
    });
};
export const addPatient=(
    name:string,
    age:number,
    medicines: string,
    address:string

):Promise<OkPacket >=> {
    return new Promise((resolve,reject)=>{
        db.query<OkPacket>(
            'INSERT INTO patients(name,age,medicines,address) VALUES (?,?,?,?)',
            [name,age,medicines,address],
            (err,result)=>{
                if (err){
                    reject(err);
                }
                else {
                    resolve(result);
                }
            }
        );

    });
};
export const deletePatient=(id:number): Promise<OkPacket>=>{
    return new Promise((resolve,reject)=>{
        db.query<OkPacket>(
            'DELETE FROM patients WHERE id=?',
            [id],
            (err,result)=>{
                if (err)  return reject(err);
                 resolve (result);
            }
        );
    });
};