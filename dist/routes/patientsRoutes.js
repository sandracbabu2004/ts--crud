import { Router } from 'express';
import * as patientController from '../controllers/patientController.js';
const router = Router();
router.get('/users', patientController.getPatients);
router.post('/add', patientController.addPatient);
router.put('/update/:id', patientController.updatePatient);
router.delete('/delete/:id', patientController.deletePatient);
export default router;
//# sourceMappingURL=patientsRoutes.js.map