import React, { useState, useEffect } from "react";
import "./NasaAPI.css";

function GaleriaNasa() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic/?count=9")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setPublicaciones(datos);
      })
      .catch((error) => {
        console.log("Error al obtener las publicaciones: ", error);
      });
  }, []);

  return (
    <>
      <section>
        <h2>Dale un vistazo al universo con esta API de la NASA</h2>
        <p>
          <div className="galeria-nasa-lista">
            {publicaciones
              .filter(
                (publicacion) =>
                  publicacion.media_type === "image" && publicacion.hdurl,
              )
              .slice(0, 9)
              .map((publicacion) => (
                <article className="tarjeta-nasa" key={publicacion.post_id}>
                  <img
                    src={publicacion.hdurl}
                    alt={publicacion.alt || publicacion.title}
                  />

                  <div className="tarjeta-nasa-contenido">
                    <h3>{publicacion.title}</h3>
                    <p>{publicacion.date}</p>
                    <p>{publicacion.explanation.replace(/<[^>]*>/g, "")}</p>
                  </div>
                </article>
              ))}
          </div>
        </p>
      </section>
    </>
  );
}
export default GaleriaNasa;
