import express from "express";
const router = express.Router();
import {
  getFruits,
  getFruit,
  postFruit,
  putFruit,
  deleteFruit,
} from "../controller/fruits.js";

/**
 * @swagger
 * /api/fruits:
 *   get:
 *     tags:
 *       - Fruits
 *     description: Returns all fruits
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of fruits
 *         schema:
 *           $ref: '#/components/schemas/fruits'
 *       500:
 *         description: SERVER ERROR
 */
router.get("/fruits", getFruits);

/**
 * @swagger
 * /api/fruits/{_id}:
 *   get:
 *     tags:
 *       - Fruits
 *     description: Returns a single fruit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: Particular Fruit Object's ID (Automatically assigned by MongoDB)
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single fruit
 *         schema:
 *           $ref: '#/components/schemas/fruits'
 *       500:
 *         description: Server Error
 */
router.get("/fruits/:_id", getFruit);

/**
 * @swagger
 * /api/fruits:
 *   post:
 *     tags:
 *       - Fruits
 *     description: Adds a new fruit to the database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fruit
 *         description: Fruit object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/fruits'
 *     responses:
 *       200:
 *         description: Successfully added
 *       500:
 *         description: Server error
 */
router.post("/fruits", postFruit);

/**
 * @swagger
 * /api/fruits/{_id}:
 *   put:
 *     tags:
 *       - Fruits
 *     description: Updates a single fruit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fruit
 *         description: Fruit object resources
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/fruits'
 *       - name: _id
 *         description: Fruit Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully added
 *       500:
 *         description: Server error
 */
router.put("/fruits/:_id", putFruit);

/**
 * @swagger
 * /api/fruits/{_id}:
 *   delete:
 *     tags:
 *       - Fruits
 *     description: Deletes a single fruit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: Fruit Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */
router.delete("/fruits/:_id", deleteFruit);

//Under Construction

//Retrieve Employees

/**
 * @swagger
 * /api/employees:
 *   get:
 *     tags:
 *       - Employees
 *     description: Returns all Employees
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of employees
 *         schema:
 *           $ref: '#/components/schemas/employees'
 *       500:
 *         description: SERVER ERROR
 */

//Retrieve an Employee

/**
 * @swagger
 * /api/employees/{_id}:
 *   get:
 *     tags:
 *       - Employees
 *     description: Returns a single fruit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: Particular Fruit Object's ID (Automatically assigned by MongoDB)
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single fruit
 *         schema:
 *           $ref: '#/components/schemas/fruits'
 *       500:
 *         description: Server Error
 */

//Add an Employee

/**
 * @swagger
 * /api/employees:
 *   post:
 *     tags:
 *       - Employees
 *     description: Adds a new fruit to the database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fruit
 *         description: Fruit object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/fruits'
 *     responses:
 *       200:
 *         description: Successfully added
 *       500:
 *         description: Server error
 */
router.post("/fruits", postFruit);

//Update an Employee

/**
 * @swagger
 * /api/employees/{_id}:
 *   put:
 *     tags:
 *       - Employees
 *     description: Updates a single fruit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fruit
 *         description: Fruit object resources
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/components/schemas/fruits'
 *       - name: _id
 *         description: Fruit Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully added
 *       500:
 *         description: Server error
 */

//Delete an Employee

/**
 * @swagger
 * /api/employees/{_id}:
 *   delete:
 *     tags:
 *       - Employees
 *     description: Deletes a single fruit
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: _id
 *         description: Fruit Object ID
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */

export default router;
