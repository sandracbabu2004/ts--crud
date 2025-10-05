import { Router } from 'express';
import * as patientController from '../controllers/patientController.js';
import { authenticateJWT } from "../middleware/authMiddleware.js";
const router = Router();
router.get("/", authenticateJWT, (req, res) => {
    res.json({
        message: "Protected route:list of patients",
        user: req.user
    });
});
router.use(authenticateJWT);
/**
 * @swagger
 * /api/patients:
 *   get:
 *     summary: Get all patients
 *     tags:
 *       - Patients
 *     responses:
 *       200:
 *         description: List of all patients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patient'
 */
router.get('/', patientController.getPatients);
/**
 * @swagger
 * /api/patients:
 *   post:
 *     summary: Add a new patient
 *     tags:
 *       - Patients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       201:
 *         description: Patient created successfully
 *       400:
 *         description: Error creating patient
 */
router.post('/', patientController.addPatient);
/**
 * @swagger
 * /api/patients/{id}:
 *   put:
 *     summary: Update a patient by ID
 *     tags:
 *       - Patients
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Patient ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Patient'
 *     responses:
 *       200:
 *         description: Patient updated successfully
 *       400:
 *         description: Error updating patient
 */
router.put('/:id', patientController.updatePatient);
/**
 * @swagger
 * /api/patients/{id}:
 *   delete:
 *     summary: Delete a patient by ID
 *     tags:
 *       - Patients
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Patient ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Patient deleted successfully
 *       400:
 *         description: Error deleting patient
 */
router.delete('/:id', patientController.deletePatient);
/**
 * @swagger
 * /api/patients/test:
 *   get:
 *     summary: Test endpoint
 *     tags:
 *       - Patients
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/test', (req, res) => res.send('OK'));
export default router;
//# sourceMappingURL=patientsRoutes.js.map