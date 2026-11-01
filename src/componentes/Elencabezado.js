import React from "react";
import { NavLink } from "react-router";
import "./Elencabezado.css";

function Encabezado() {
  return (
    <>
      <header className="encabezado">
        <LinkLogo />
        <nav className="encabezado-nav">
          <NavLink to="/Inicio" end>
            Inicio
          </NavLink>
          <NavLink to="/Servicios" end>
            Servicios
          </NavLink>
          <NavLink to="/Contacto" end>
            Contacto
          </NavLink>
        </nav>
      </header>
    </>
  );
}

function LinkLogo() {
  return (
    <NavLink to="/" className="encabezado-logo">
      Mi Portfolio
    </NavLink>
  );
}
export default Encabezado;
