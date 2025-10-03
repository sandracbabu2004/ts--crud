import { Router } from 'express';
import * as patientController from '../controllers/patientController.js';
const router = Router();
/**
 *    @swagger
 *  /api/patients/users:
 *  get:
 *  summary:Get all patients
 *  tags:
 *  -patients
 *  responses:
 *  200:
 *  description:Listnof all patients
 *  content:
 *  application/json:
 *  schema:
 *  type:array
 *  items:
 *  $ref:'#/components/schemas/Patient'
 */
router.get('/users', patientController.getPatients);
/**
 *  @swagger
 *  /api/patients/add:
 *  post:
 *  summary:add a new patients
 *  tags:
 *  -patients
 *  requestBody:
 *  require:true
 
 *  content:
 *  application/json:
 *  schema:
 *  $ref:'#/components/schemas/Patient'
 *  responses:
 *  201:
 *  description:Patient created successfully

 */
router.post('/add', patientController.addPatient);
/**
 *  @swagger
 *  /api/patients/update/{id}:
 *  put:
 *  summary:Update a patient by ID
 *  tags:
 *  -patients
 *  parameters:
 *  -in:path
 *  name:id
 *  required:true
 *  schema:
 *  type:string
 *  description:Patient ID
 *  requestBody:
 *  required:true
 
 *  content:
 *  application/json:
 *  schema:
 *  $ref:'#/components/schemas/Patient'
 *  responses:
 *  200:
 *  description:Patient updated successfully

 */
router.put('/update/:id', patientController.updatePatient);
/**
 *  @swagger
 *  /api/patients/delete/{id}:
 *   delete:
 *  summary:Delete a patient by ID
 *  tags:
 *  -patients
 *  parameters:
 *  -in:path
 *  name:id
 *  required:true
 *  schema:
 *  type:string
 *  description: Patient ID
 *  responses:
 *  200:
 
 
 *  description:Patient deleted successfully

 */
router.delete('/delete/:id', patientController.deletePatient);
/**
 *  @swagger
 *  /api/patients/test:
 *  get:
 *  summary:Test endpoint
 *  tags:
 *  -patients
 *  responses:
 *  200:
 *  description:OK
 */
router.get('/test', (req, res) => res.send('OK'));
export default router;
//# sourceMappingURL=patientsRoutes.js.map