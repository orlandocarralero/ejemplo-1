import express from 'express';
import cors from 'cors';
//importar conexion a la base de datos
import db from './database/db.js';
//importar el enrutador
import estudianteRutes from './Routes/routes.js';

const app = express();

app.use( cors() );
app.use( express.json() );
app.use('/estudiantes', estudianteRutes);

try {
  await db.authenticate();
  console.log('Conexion exitosa a la Base de Datos');
} catch (error) {
  console.log( `El error de conexion es ${error}`);  
}

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

const PUERTO = process.env.PORT || 8000; 
app.listen(PUERTO, () => { 
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`); 
});
