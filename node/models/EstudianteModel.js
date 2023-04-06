//importar la conexion a la base de datos
import db from '../database/db.js';
//importar sequelize
import { DataTypes } from 'sequelize';

const EstudianteModel = db.define( 'estudiante', {
  //id_estudiante: { type: DataTypes.INTEGER },    
  nombre: { type: DataTypes.STRING },
  apellidos: { type: DataTypes.STRING },
});

export default EstudianteModel;