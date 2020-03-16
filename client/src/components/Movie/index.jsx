import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchMovie } from "../../redux/actions/movies";
// import { fetchUser } from "../../redux/actions/user";
import Movie from "./Movie";

const MovieContainer = props => {
  const [movieSelected, setMovieSelected] = useState(null);

  useEffect(() => {
    props.fetchMovie(props.movieId);
    // props.fetchUser(props.loggedUser._id);
  }, [props.fetchMovie]);

  useEffect(() => {
    setMovieSelected(props.selectedMovie)
  }, [props.selectedMovie]);

  return (
    <Movie
      selectedMovie={movieSelected}
      user={props.loggedUser}
      favouritesMovies={props.favouritesMovies}
    />
  );
};

const mapStateToProps = function(state, ownProps) {
  return {
    // movies: state.movies.list,
    selectedMovie: state.movies.selected,
    favouritesMovies: state.movies.favouritesMovies,
    // loggedUser: state.users.loggedUser,
    // selectedUser: state.users.selectedUser,
    movieId: ownProps.match.params.id
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    // fetchUser: UserId => dispatch(fetchUser(UserId))
    // fetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
