import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import DeleteConfirmationModal from "./DeleteConfirmationModal"

const CardNote = ({titulo, contenido, date, id, onDelete}) => {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);


const deleteNote = async () => {
  if (!id) {
    toast.error("ID de nota no definido");
    return;
  }

  try {
    const res = await axios.delete(`${import.meta.env.VITE_API_URL}/api/notas/${id}`);
    if (res.status !== 200) {
      throw new Error("Error al eliminar la nota");
    }
    toast.success("Nota eliminada correctamente", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored"
    });
    if (onDelete) onDelete(id);
    setShowConfirmModal(false);
  } catch (error) {
    console.error(error);
    toast.error("Error al eliminar la nota", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored"
    });
  }
};

  return (
    <>
    <div className="card card-border bg-base-300 w-80">
    <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p>{contenido}</p>
        <span>{date}</span>
        <div className="card-actions justify-end mt-9">
        <button className="btn btn-primary" onClick={() => navigate(`/editnote/${id}`)}>Editar</button>
        <button className="btn btn-error"onClick={() => setShowConfirmModal(true)}>Eliminar</button>
        </div>
    </div>
    </div>
        {showConfirmModal && (
        <DeleteConfirmationModal
          deleteNote={deleteNote}
          setShowConfirmModal={setShowConfirmModal}
        />
      )}
    </>

  )
}

export default CardNote
