import { createExperience, updateExperience, deleteExperience } from "../controllers/experienceController";
import verifyBearer from "../utils/verifyBearer";
import express from "express";
const router = express.Router();


/**
 * @swagger
 * /api/v1/experience/admin/create:
 *   post:
 *     summary: Create a new experience record
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobTitle:
 *                 type: string
 *                 example: Senior Software Engineer
 *               company:
 *                 type: string
 *                 example: ABC Corp
 *               startDate:
 *                 type: string
 *                 format: date
 *                 example: 2020-01-01
 *               endDate:
 *                 type: string
 *                 format: date
 *                 example: 2024-01-01
 *               description:
 *                 type: string
 *                 example: Responsible for leading a team of developers and delivering high-quality software solutions.
 *     responses:
 *       201:
 *         description: Experience record created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/admin/create', verifyBearer, createExperience);

/**
 * @swagger
 * /api/v1/experience/admin/update/{id}:
 *   put:
 *     summary: Update an experience record by ID
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the experience record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobTitle:
 *                 type: string
 *                 example: Senior Software Engineer
 *               company:
 *                 type: string
 *                 example: ABC Corp
 *               startDate:
 *                 type: string
 *                 format: date
 *                 example: 2020-01-01
 *               endDate:
 *                 type: string
 *                 format: date
 *                 example: 2024-01-01
 *               description:
 *                 type: string
 *                 example: Responsible for leading a team of developers and delivering high-quality software solutions.
 *     responses:
 *       200:
 *         description: Experience record updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Experience record not found
 */
router.put('/admin/update/:id', verifyBearer, updateExperience);

/**
 * @swagger
 * /api/v1/experience/admin/delete/{id}:
 *   delete:
 *     summary: Delete an experience record by ID
 *     tags: [Experience]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the experience record to delete
 *     responses:
 *       200:
 *         description: Experience record deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Experience record not found
 */
router.delete('/admin/delete/:id', verifyBearer, deleteExperience);



export default router;