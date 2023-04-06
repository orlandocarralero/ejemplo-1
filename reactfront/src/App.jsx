import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaRegPlusSquare } from "react-icons/fa";
//importamos los componentes
import ListarEstudiantes from './estudiante/ListarEstudiantes';
import CrearEstudiante from './estudiante/CrearEstudiante';
import EditarEstudiante from './estudiante/EditarEstudiante';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ListarEstudiantes />} />                        
            <Route path='/crearEstudiante' element={<CrearEstudiante />} />                        
            <Route path='/editarEstudiante/:id' element={<EditarEstudiante />} />                        
          </Routes>
        </BrowserRouter>        
      </div>       
    </div>
  )
}

export default App
