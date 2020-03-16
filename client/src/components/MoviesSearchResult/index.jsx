import { connect } from "react-redux";

import React, { useEffect } from "react";
import Movies from "../Movies";

import { fetchMovies } from "../../redux/actions/movies";

const MoviesSearchResult = props => {
  useEffect(() => {
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const title = params.get("title");

    if (!props.searchTitle && title) {
      props.fetchMovies(title);
    }
  }, [props.fetchMovies, props.searchTitle]);

  return <Movies movies={props.movies}/>;
};

const mapStateToProps = function(state) {
  return {
    movies: state.movies.list,
    searchTitle: state.search.inputValue
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchMovies: searchedMovies => dispatch(fetchMovies(searchedMovies))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchResult);
