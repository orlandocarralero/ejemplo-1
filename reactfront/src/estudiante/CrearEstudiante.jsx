import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/estudiantes/';

const CrearEstudiante = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const navigate = useNavigate();

  //funcion para guardar
  const guardar = async (e) => {
    e.preventDefault();
    await axios.post(URI, {nombre: nombre, apellidos: apellidos});
    navigate('/');    
  }

  return (
    <div style={{ padding: '10px' }}>
      <h1>
        Crear Estudiante
      </h1>
      <form onSubmit={guardar}>
        <div className='mb-3'>
          <label className='form-label'>Nombre</label>
          <input 
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) } 
                type='text'
                className='form-control'
          />                
        </div>
        <div className='mb-3'>
          <label className='form-label'>Apellidos</label>
          <input 
                value={apellidos}
                onChange={ (e) => setApellidos(e.target.value) } 
                type='text'
                className='form-control'
          />                
        </div> 
        <button type='submit' className='btn btn-primary'>Guardar</button>       
      </form>
    </div>
  )
}

export default CrearEstudiante;