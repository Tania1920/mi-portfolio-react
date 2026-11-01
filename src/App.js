import { BrowserRouter, Routes, Route } from "react-router";
import Encabezado from "./componentes/Elencabezado";
import Inicio from "./Paginas/Inicio";
import Servicios from "./Paginas/Servicios";
import Contacto from "./Paginas/Contacto";
import NoExiste from "./Paginas/NoExiste";

function App() {
  return (
    <>
      <BrowserRouter>
        <Encabezado/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NoExiste />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
