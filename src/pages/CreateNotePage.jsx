import FromularioNotas from '../components/FromularioNotas'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateNotePage = () => {
  const navigate = useNavigate();
  const handleCreate = async (nota) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/notas`, nota)
      .then(res => {
        if(res.status !== 201) {
          throw new Error ("Error al crear la nota")
        }
        toast.success("Nota creada correctamente", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored"
        });
        navigate("/")
      })
    }
    catch(error) {
      console.error(error)
    }
  }
  return (
    <div>
      <FromularioNotas onSubmit={handleCreate} initialDate ={{title: "", content:""}} />
    </div>
  )
}

export default CreateNotePage