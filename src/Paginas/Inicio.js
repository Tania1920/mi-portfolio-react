import React from "react";
import { Link } from "react-router";
import GaleriaNasa from "../componentes/NasaAPI";
import PiedePagina from "../componentes/PiedePagina";
import "./Inicio.css";

function Inicio() {
  return (
    <>
      <main className="inicio">
        <section className="inicio-contenido">
          <div className="inicio-presentacion">
            <p className="inicio-saludo">¡Hola!</p>
            <h1>
              Soy <span>Tania González</span>
            </h1>
            <h2>Desarrolladora web en formación</h2>
            <p className="inicio-descripcion">
              Estoy aprendiendo a crear páginas web funcionales, atractivas y
              fáciles de utilizar. <br/>En este espacio comparto mis proyectos, mis
              habilidades y mi progreso.
            </p>
            <Link to="/Contacto" className="inicio-boton">
              Contactarme
            </Link>
          </div>
        </section>

        <section className="inicio-API">
          <GaleriaNasa />
        </section>
      </main>

      <PiedePagina />
    </>
  );
}
export default Inicio;
