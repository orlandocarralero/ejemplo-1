//importar el modelo 
import EstudianteModel from '../models/EstudianteModel.js';

//funciones para el CRUD
//mostrar todos los estuduantes
export const listarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await EstudianteModel.findAll();
    res.json(estudiantes);         
  } catch (error) {
    res.json( {message : error.message} );           
  }
} 
//Mostrar un estudiante
export const unEstudiante = async (req, res) => {
  try {
    const estudiante = await EstudianteModel.findAll({
      where: { id:req.params.id }
    });
    res.json(estudiante[0]);
  } catch (error) {
    res.json( {message : error.message} );  
  }
}   
//Crear un estudiante
export const crearEstudiante = async (req, res) => {
  try {
    await EstudianteModel.create(req.body);
    res.json({
      "message":"¡Estudiante creado satisfactoriamente!"
    });
  } catch (error) {
    res.json( {message : error.message} );   
  }
}
//Editar un estudiante
  export const editarEstudiante = async (req, res) => {
    try {
      await EstudianteModel.update(req.body, {
        where: { id:req.params.id}
      }); 
      res.json({
        "message": "¡Estudiante actualizado satisfactoriamente!"
      }); 
    } catch (error) {
      res.json( {message : error.message} );  
    }
  }
//Eliminar un estudiante
export const eliminarEstudiante = async (req, res) => {
  try {
    await EstudianteModel.destroy({
      where: { id:req.params.id }
    });
    res.json({
      "message": "¡Estudiante eliminado satisfactoriamente!"
    });
  } catch (error) {
    res.json( {message : error.message} );    
  }
}  