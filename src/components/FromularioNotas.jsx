import { useEffect } from "react";
import { useState } from "react"

const FromularioNotas = ({onSubmit, initialDate}) => {
    const [nota, setNota] = useState(initialDate);

// Necesitamos actualizar los cambios si los datos iniciales cambian

useEffect(() => {
    setNota[initialDate];
}, [initialDate]);

const handleChange = (e) => {
    setNota({
        ...nota,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(nota)
}

  return (
    <>
    <form onSubmit={handleSubmit} className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10 mt-10">
        <input 
            className="block w-full mb-8 input lg:input-lg" 
            type="text" 
            placeholder="Ingrese un titulo" 
            name="titulo" 
            id="titulo" 
            required
            value={nota.titulo}
            onChange={handleChange}
        />
        <textarea 
            className=" block w-full mb-8 input lg:input-lg textarea resize-y" 
            placeholder="Contenido de la Nota" 
            name="contenido" 
            id="contenido" 
            required
            value={nota.contenido}
            onChange={handleChange} 
        />
        <button className="btn btn-soft btn-primary">Guardar</button>
    </form>
    </>
  )
}

export default FromularioNotas