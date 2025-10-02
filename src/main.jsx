import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import Ficcion from "./Ficcion"
import Noficcion from "./NoFiccion"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}>
          <Route path="libros/ficcion" element={<Ficcion />} />
          <Route path="libros/no-ficcion" element={<Noficcion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
