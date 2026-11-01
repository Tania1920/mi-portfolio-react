import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Formulario.css";

function Formulario() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tuh2sbl", "template_4v0pnsq", form.current, {
        publicKey: "xrAuwkyaO6T0_mica",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("¡Correo enviado con éxito!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("No se pudo enviar el mensaje. Por favor, intenta nuevamente.");
        },
      );
  };

  return (
    <form className="formulario" ref={form} onSubmit={sendEmail}>
      <div className="formulario-campo">
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Escribí tu nombre"
          autoComplete="name"
          required
        />
      </div>

      <div className="formulario-campo">
        <label>Correo electrónico</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ejemplo@correo.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="formulario-campo">
        <label>Mensaje</label>
        <textarea
          name="message"
          id="message"
          placeholder="Contame en que puedo ayudarte..."
          rows="5"
          required
        />
      </div>

      <button type="submit" value="Send" className="formulario-boton">
        Enviar mensaje
      </button>
    </form>
  );
}
export default Formulario;
