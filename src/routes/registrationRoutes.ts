import { Router } from 'express';
import {
  getPersonsController,
  createPersonController,
  updatePersonController,
  deletePersonController,
} from '../controllers/registrationController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the person
 *         name:
 *           type: string
 *           description: The name of the person
 *         email:
 *           type: string
 *           description: The email of the person
 *         phones:
 *           type: array
 *           items:
 *             type: string
 *             description: The phone number of the person
 *       example:
 *         id: d5fE_asz
 *         name: John Doe
 *         email: john.doe@gmail.com
 *         phones: ["(123) 456-7890"]
 */

/**
 * @swagger
 * tags:
 *   name: Persons
 *   description: API to manage persons
 */

/**
 * @swagger
 * /persons:
 *   get:
 *     summary: Returns the list of all the persons
 *     tags: [Persons]
 *     responses:
 *       200:
 *         description: The list of the persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get('/', getPersonsController);

/**
 * @swagger
 * /persons:
 *   post:
 *     summary: Creates a new person
 *     tags: [Persons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       201:
 *         description: The person was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 */
router.post('/', createPersonController);

/**
 * @swagger
 * /persons/{id}:
 *   put:
 *     summary: Updates an existing person
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the person
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Person'
 *     responses:
 *       200:
 *         description: The person was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 */
router.put('/:id', updatePersonController);

/**
 * @swagger
 * /persons/{id}:
 *   delete:
 *     summary: Deletes a person
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the person
 *     responses:
 *       200:
 *         description: The person was successfully deleted
 */
router.delete('/:id', deletePersonController);

export default router;
