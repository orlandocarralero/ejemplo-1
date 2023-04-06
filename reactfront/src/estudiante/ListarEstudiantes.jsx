import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { FaPlusSquare } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";


const URI = 'http://localhost:8000/estudiantes/';
//const navigate = useNavigate();

const ListarEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  useEffect( () => {
    getEstudiantes();
  }, [] );

  //funcion para mostrar todos los estudiantes
  const getEstudiantes = async () => {
    const respuesta = await axios.get(URI);
    setEstudiantes(respuesta.data);
  }
  
  //funcion para eliminar un estudiante
  const eliminarEstudiante = async (id) => {    
    await axios.delete(`${URI}${id}`);
    getEstudiantes();    
  }

  return(
    <div className='container' style={{ padding: '25px' }}>
      <div className='row'>
        <div className='col' style={{ textAlign: 'center'}} >
          <Link to='/crearEstudiante' className='btn btn-primary mt-2 mb-2' ><FaPlusSquare /></Link>          
          <table className='table'>
            <thead className='table-primary'>
              <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                estudiantes.map((estudiante) => (
                  <tr key={estudiante.id} >
                    <td> {estudiante.nombre} </td>
                    <td> {estudiante.apellidos} </td>
                    <td>                    
                      <img src='/1.png'  alt='...' style={{ height: '100px', width: '100px', padding: '5px', border: '1px solid #ddd', borderRadius: '10px'}}/>                      
                    </td>
                    <td>
                      <div className='row'>
                        <div className='col-md-6' style={{ textAlign: 'right' }}>
                          <Link to={`/editarEstudiante/${estudiante.id}`} className='btn btn-info'><FaEdit /></Link>                      
                        </div>
                        <div className='col-md-6' style={{ textAlign: 'left' }}>
                          <button onClick={ () => eliminarEstudiante(estudiante.id)} className='btn btn-danger'><FaTrash /></button>
                        </div>
                      </div>                                            
                    </td>
                  </tr>                    
                  ))
              }                          
            </tbody>           
          </table>        
        </div>
      </div>
    </div>
  )
}

export default ListarEstudiantes;