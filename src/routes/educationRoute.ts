import { createEduaction, updateEduaction, deleteEduaction } from '../controllers/eduactionController';
import verifyBearer from '../utils/verifyBearer';
import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/v1/education/admin/create:
 *   post:
 *     summary: Create a new education record
 *     tags: [Education]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               degree:
 *                 type: string
 *                 example: Bachelor of Science in Computer Science
 *               institution:
 *                 type: string
 *                 example: XYZ University
 *               year:
 *                 type: integer
 *                 example: 2024
 *               description:
 *                 type: string
 *                 example: A detailed description of the degree program
 *     responses:
 *       201:
 *         description: Education record created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/admin/create', verifyBearer, createEduaction);

/**
 * @swagger
 * /api/v1/education/admin/update/{id}:
 *   put:
 *     summary: Update an education record by ID
 *     tags: [Education]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the education record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               degree:
 *                 type: string
 *                 example: Bachelor of Science in Computer Science
 *               institution:
 *                 type: string
 *                 example: XYZ University
 *               year:
 *                 type: integer
 *                 example: 2024
 *               description:
 *                 type: string
 *                 example: A detailed description of the degree program
 *     responses:
 *       200:
 *         description: Education record updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Education record not found
 */
router.put('/admin/update/:id', verifyBearer, updateEduaction);

/**
 * @swagger
 * /api/v1/education/admin/delete/{id}:
 *   delete:
 *     summary: Delete an education record by ID
 *     tags: [Education]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the education record to delete
 *     responses:
 *       200:
 *         description: Education record deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Education record not found
 */
router.delete('/admin/delete/:id', verifyBearer, deleteEduaction);


export default router;

