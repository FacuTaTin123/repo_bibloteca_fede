import { useOutletContext } from 'react-router-dom'

export default function Noficcion() {
  const { libros } = useOutletContext(); // 👈 obtenemos los libros
  const librosNoFiccion = libros.filter(libro => libro.categoria === "No ficción");

  return (
    <div>
      <h2>Libros de no ficción</h2>
      <ul>
        {librosNoFiccion.map(libro => (
          <li key={libro.id}>{libro.titulo}</li>
        ))}
      </ul>
    </div>
  )
}
