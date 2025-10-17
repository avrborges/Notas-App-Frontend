const CardNote = ({titulo, contenido, date}) => {
  return (
    <>
    <div className="card card-border bg-base-300 w-80">
    <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p>{contenido}</p>
        <span>{date}</span>
        <div className="card-actions justify-end mt-9">
        <button className="btn btn-primary">Editar</button>
        <button className="btn btn-error">Eliminar</button>
        </div>
    </div>
    </div>
    </>

  )
}

export default CardNote
