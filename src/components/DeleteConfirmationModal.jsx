const DeleteConfirmationModal = ({ deleteNote, setShowConfirmModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-6 rounded shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">¿Estás seguro de que quieres eliminar esta nota?</h2>
        <div className="flex justify-end gap-4">
          <button
            className="btn btn-error"
            onClick={deleteNote}
          >
            Sí, eliminar
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
