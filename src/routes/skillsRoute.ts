import { createSkill, updateSkill, deleteSkill } from '../controllers/skillsController';
import verifyBearer from '../utils/verifyBearer';
import express from 'express';
const router = express.Router();

/**
 * @swagger
 * /api/v1/skills/admin/create:
 *   post:
 *     summary: Create a new skill record
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: JavaScript
 *               level:
 *                 type: string
 *                 example: Expert
 *               description:
 *                 type: string
 *                 example: Proficient in JavaScript and related frameworks like React and Node.js.
 *     responses:
 *       201:
 *         description: Skill record created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/admin/create', verifyBearer, createSkill);

/**
 * @swagger
 * /api/v1/skills/admin/update/{id}:
 *   put:
 *     summary: Update a skill record by ID
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the skill record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: JavaScript
 *               level:
 *                 type: string
 *                 example: Expert
 *               description:
 *                 type: string
 *                 example: Proficient in JavaScript and related frameworks like React and Node.js.
 *     responses:
 *       200:
 *         description: Skill record updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Skill record not found
 */
router.put('/admin/update/:id', verifyBearer, updateSkill);

/**
 * @swagger
 * /api/v1/skills/admin/delete/{id}:
 *   delete:
 *     summary: Delete a skill record by ID
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the skill record to delete
 *     responses:
 *       200:
 *         description: Skill record deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Skill record not found
 */
router.delete('/admin/delete/:id', verifyBearer, deleteSkill);


export default router;