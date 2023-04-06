import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/estudiantes/';

const EditarEstudiante = () => {
  const [ nombre, setNombre ] = useState('');
  const [ apellidos, setApellidos ] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  //funcion para editar
  const editar = async (e) => {
    e.preventDefault();
    await axios.put(URI+id, {
      nombre:nombre,
      apellidos:apellidos
    })
    navigate('/') ;
  } 
  
  useEffect( () => {
    getEstudianteById();
  }, [] );

  const getEstudianteById = async () => {
    //const res = await axios.get(URI+id);
    const res = await axios.get(`${URI}${id}`);
    setNombre(res.data.nombre);
    setApellidos(res.data.apellidos);
  }

  return (
    <div style={{ padding: '10px' }}>
      <h1>
        Editar Estudiante
      </h1>
      <form onSubmit={editar}>
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

export default EditarEstudiante;