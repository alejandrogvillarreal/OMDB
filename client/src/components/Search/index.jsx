import React, { useEffect } from "react";
import { connect } from "react-redux";

import Search from "./Search";

import { fetchMovies } from "../../redux/actions/movies";
import { moviesSearcher } from "../../redux/actions/search";
// moviesSearcher recibe el valor del input

const SearchContainer = props => {
  const handleSubmit = event => {
    event.preventDefault();
    if (props.inputValue.length > 0) {
      props.fetchMovies(props.inputValue);
      props.history.push(`/search?title=${props.inputValue}`);
    }
  };

  const handleChange = evt => {
    const value = evt.target.value;
    props.moviesSearcher(value);
  };

  return (
    <div>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={props.inputValue}
      />
    </div>
  );
};

const mapStateToProps = function(state) {
  return {
    movies: state.movies.list,
    inputValue: state.search.inputValue
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchMovies: searchedMovies => dispatch(fetchMovies(searchedMovies)),
    moviesSearcher: inputValue => dispatch(moviesSearcher(inputValue))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
