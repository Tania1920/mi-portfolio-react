import React from "react";
import servicios from "../datos/servicios";
import PiedePagina from "../componentes/PiedePagina";
import "./Servicios.css";

function Servicios() {
  return (
    <>
      <main className="servicios">
        <h1>Mis Servicios</h1>
        <p className="servicios-introduccion">
          Estas son algunas de las áreas en las que estoy aprendiendo y
          desarrollandome.
        </p>
        <section className="servicios-lista">
          {servicios.map((servicio) => (
            <article className="servicios-tarjeta" key={servicio.id}>
              <img 
              src={servicio.imagen} 
              alt={servicio.titulo} />
              <h2>{servicio.titulo}</h2>
              <p>{servicio.descripcion}</p>
            </article>
          ))}
        </section>
      </main>

      <PiedePagina />
    </>
  );
}
export default Servicios;
