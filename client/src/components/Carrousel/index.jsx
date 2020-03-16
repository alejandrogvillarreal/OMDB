import React from "react";

export default () => {
  return (
    <div>
      <div className="bd-example">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://coleccionesdepelicula.files.wordpress.com/2016/12/gif-portada-banner-colecciones-de-peliculas-chaplin-black1.gif"
                className="d-block w-100"
                alt="..."
                height="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
