import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { languageContext } from "../../config/language";

// import AddFavouriteContainer from '../../containers/AddFavouriteContainer';
// import RemoveFavouriteContainer from '../../containers/RemoveFavouriteContainer';

export default ({ selectedMovie, user, favouritesMovies }) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <div>
      {/* <h1 className="text-center">Movie</h1> */}
      {selectedMovie && (
        <div className="col mt-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-5">
              <div className="card zoom">
                <Link to={`/movies/${selectedMovie.imdbID}`}>
                  <img
                    className="card-img-top"
                    src={selectedMovie.Poster}
                    alt=""
                    width=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-10-mb-5">
              <div className="card">
                <div className="card-body shadow-lg">
                  <h3 className="card-title">
                    <Link
                      to={`/movies/${selectedMovie.imdbID}`}
                      className="card-link text-dark"
                    >
                      {selectedMovie.Title}
                    </Link>
                  </h3>
                  <p className="card-text text-secondary">
                    <b>{lang.duration}:</b> {selectedMovie.Runtime}
                  </p>
                  <p className="card-text text-secondary">
                    <b>{lang.genre}:</b> {selectedMovie.Genre}
                  </p>
                  <p className="card-text text-secondary">
                    <b>{lang.year}:</b> {selectedMovie.Released}
                  </p>
                  <p className="card-text text-secondary">
                    <b>{lang.plot}:</b> {selectedMovie.Plot}
                  </p>
                  <p className="card-text text-secondary">
                    <b>{lang.director}:</b> {selectedMovie.Director}
                  </p>
                  <p className="card-text text-secondary">
                    <b>{lang.actors}:</b> {selectedMovie.Actors}
                  </p>
                  <div className="row">
                    <div className="col-8">
                      <p className="card-text text-info">
                        <b>{lang.rating}:</b> {selectedMovie.imdbRating}
                      </p>
                    </div>
                    <div className="col-4">
                      {/* {console.log(user, 'SOY USER')} */}
                      {
                        // favouritesMovies && favouritesMovies.map(movie => movie.imdbID === selectedMovie.imdbID).includes(true) ?
                        //     <RemoveFavouriteContainer selectedMovie={selectedMovie} />
                        //     :
                        //     <AddFavouriteContainer selectedMovie={selectedMovie} />
                      }
                      {/* <Link to={`/movies/${selectedMovie.imdbID}`} className="btn btn-success btn-block" id="color-german">Agregar a Favs</Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
