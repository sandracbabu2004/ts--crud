import * as patientRepo from '../respositories/patientRepository.js';
export const modifyPatients = (id, data) => {
    return patientRepo.updatePatient(id, data);
};
export const getPatients = async () => {
    return await patientRepo.getAllPatients();
};
export const createPatient = async (data) => {
    if (!data.name || !data.age)
        throw new Error('Missing required fields');
    return await patientRepo.addPatient(data.name, data.age, data.medicines, data.address);
};
export const deletePatients = (id) => {
    return patientRepo.deletePatient(id);
};
//# sourceMappingURL=patientServieces.js.map