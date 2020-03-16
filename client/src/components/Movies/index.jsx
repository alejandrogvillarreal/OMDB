import React, { useContext } from "react";
import { languageContext } from "../../config/language";

import { Link } from "react-router-dom";

export default ({ movies }) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div>
      <div className="row mt-5">
        {movies &&
          movies.map((movie, id) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 mb-5" key={id}>
                <div className="card zoom shadow">
                  <img
                    className="card-img-top"
                    src={movie.Poster}
                    alt=""
                    height="350px"
                    title={movie.Title}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {lang.year}: {movie.Year}
                    </p>
                    <p className="card-text">
                      {lang.category}: {movie.Type}
                    </p>
                    <div className="text-center">
                      <Link
                        className="btn btn-secondary"
                        to={`/movies/${movie.imdbID}`}
                      >
                        {lang.seeDetail}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
