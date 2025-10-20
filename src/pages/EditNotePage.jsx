import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import FormularioNotas from "../components/FromularioNotas";

const apiURL = import.meta.env.VITE_API_URL;

const EditNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState({
    titulo: "",
    contenido: ""
  });

  useEffect(() => {
    axios.get(`${apiURL}/api/notas/${id}`).then((res) => {
      setInitialData({
        titulo: res.data.titulo,
        contenido: res.data.contenido,
      });
    });
  }, [id]);


const handleUpdate = async (nota) => {
  try {
    const res = await axios.put(`${apiURL}/api/notas/${id}`, nota);
    if (res.status === 200) {
      toast.success("¡Nota actualizada con éxito!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/");
    } else {
      throw new Error("Error al actualizar la nota");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al actualizar la nota", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  }
};

  return (
    <>
      <div>Edit Note Page</div>
      <FormularioNotas initialData={initialData} onSubmit={handleUpdate} />
    </>

  )
}

export default EditNotePage