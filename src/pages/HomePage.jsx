import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CardNote from "../components/CardNote";
import estilo from "./HomePage.module.css"
import formatData from "../utils/formatDate";

const API_URL = import.meta.env.VITE_API_URL;

const HomePage = () => {
  
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerNotas = async () => {
      try {
        const respuesta = await axios.get(`${API_URL}/api/notas`)
        console.log(respuesta.data)
        setNotas(respuesta.data)
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    obtenerNotas();
  },[]);

  const handleDelete = (id) => {
    setNotas((prevNotas) => prevNotas.filter((nota) => nota._id !== id));
  };

  if(loading){
    return <span>Cargando</span>
  }

  return (
    <>
    <div className={estilo.contenedor}> 
      {notas.map((nota) => (
        <CardNote key={nota._id}
        titulo={nota.titulo}
        contenido={nota.contenido}
        id={nota._id}
        date={formatData(nota.createdAt)}
        onDelete={handleDelete}
        />
      ))}
    </div>

    </>


  )
}

export default HomePage