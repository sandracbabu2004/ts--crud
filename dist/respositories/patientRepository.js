import { db } from '../db.js';
export const updatePatient = (id, data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE patients SET name=?,age=?,medicines=?,address=? WHERE id=?", [data.name, data.age, data.medicines, data.address, id], (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result);
        });
    });
};
export const getAllPatients = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM patients', (err, results) => {
            if (err)
                return reject(err);
            resolve(results);
        });
    });
};
export const addPatient = (name, age, medicines, address) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO patients(name,age,medicines,address) VALUES (?,?,?,?)', [name, age, medicines, address], (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
};
export const deletePatient = (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM patients WHERE id=?', [id], (err, result) => {
            if (err)
                return reject(err);
            resolve(result);
        });
    });
};
//# sourceMappingURL=patientRepository.js.map