import type { Request, Response } from 'express';
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
export declare const deletePatient: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
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
export declare const updatePatient: (req: Request, res: Response) => Promise<void>;
export declare const getPatients: (req: Request, res: Response) => Promise<void>;
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
export declare const addPatient: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=patientController.d.ts.map