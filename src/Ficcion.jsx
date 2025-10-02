import { useOutletContext } from 'react-router-dom'

export default function Ficcion() {
  const { libros } = useOutletContext(); // 👈 obtenemos los libros
  const librosFiccion = libros.filter(libro => libro.categoria === "Ficción");

  return (
    <div>
      <h2>Libros de ficción</h2>
      <ul>
        {librosFiccion.map(libro => (
          <li key={libro.id}>{libro.titulo}</li>
        ))}
      </ul>
    </div>
  )
}
