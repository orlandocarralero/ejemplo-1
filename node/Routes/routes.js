 import express from 'express';
 import { crearEstudiante, editarEstudiante, eliminarEstudiante, listarEstudiantes, unEstudiante } from '../controllers/EstudianteController.js';
 
 const router = express.Router();

 router.get('/', listarEstudiantes);
 router.get('/:id', unEstudiante);
 router.post('/', crearEstudiante);
 router.put('/:id', editarEstudiante);
 router.delete('/:id', eliminarEstudiante);

 export default router;