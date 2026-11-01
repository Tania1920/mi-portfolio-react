import React from "react";
import Formulario from "../componentes/Formulario";
import PiedePagina from "../componentes/PiedePagina";
import "./Contacto.css";

function Contacto() {
  return (
    <>
      <main className="contacto">
        <section className="contacto-presentacion">
          <p className="contacto-etiqueta">CONTACTO</p>
          <h1>Hablemos de tu próximo proyecto</h1>
          <p className="contacto-descripcion">
            ¿Tenés una idea, una consulta o querés conocer más sobre mi trabajo?
            Estoy aprendiendo y creciendo como desarrolladora web, y me
            encantaría leerte.
          </p>
          <p className="contacto-invitacion">
            Completá el formulario y enviame tu mensaje.
          </p>
        </section>

        <section className="contacto-contenido">
          <div className="contacto-formulario">
            <h2>Enviame un mensaje</h2>
            <p>Dejá tus datos y contame en que puedo ayudarte.</p>
            <Formulario />
          </div>

          <div className="contacto-mapa">
            <h2>Aquí puedes encontrarme</h2>
            <p>Ubicación: Salta, Argentina.</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.182353384651!2d-65.41285882471914!3d-24.789208607846476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bcaa4146a5%3A0x5858d5a81b90c139!2sPlaza%209%20de%20Julio!5e0!3m2!1ses!2sar!4v1793317778716!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              title="Mapa-Ubicacion de referencia"
            ></iframe>
          </div>
        </section>
      </main>

      <PiedePagina />
    </>
  );
}
export default Contacto;
