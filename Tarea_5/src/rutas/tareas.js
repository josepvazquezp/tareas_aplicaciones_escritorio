const express = require('express');
const router = express.Router();
const controller = require('./../controladores/tareas');

/**
 * @swagger
 * /tareas:
 *  post:
 *    desription: crear una nueva tarea
 *    parameters:
 *      - in: body
 *        name: crear
 *        description: insertar en formato de JSON => el titulo, descripcion y status de la tarea
 *        required: true
 *        schema: 
 *          type: string
 *    responses:
 *      201:
 *        description: post de crear tarea
 */
router.post('/', express.json(), controller.crear);

/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    desription: actualizar una tarea
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea para actualizar
 *        required: true
 *        schema:
 *          type: string
 *      - in: body
 *        name: actualizar
 *        description: insertar en formato JSON => el titulo y descripcion de la tarea
 *        required: true
 *        schema: 
 *          type: string
 *    responses:
 *      200:
 *        description: put de actualizar tarea
 */
router.put('/:id', express.json(), controller.actualizar);

/**
 * @swagger
 * /tareas:
 *  get:
 *    desription: listar todas las tareas
 *    responses:
 *      200:
 *        description: get de todas las tareas
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *    desription: listar una tarea
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea para obtener
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: get de listar una tarea
 */
router.get('/:id', controller.ver);

/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *    desription: borrar una tarea
 *    parameters:
 *      - in: path
 *        name: id
 *        description: id de la tarea para eliminar
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: delete de eliminar tarea
 */
router.delete('/:id', controller.borrar);

module.exports = router;