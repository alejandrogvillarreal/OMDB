import { connect } from "react-redux";
import React, { useEffect, useContext } from "react";
import Home from "./Home";
import { fetchHardcodedMovies } from "../../redux/actions/movies";

import { languageContext } from "../../config/language";


const HomeContainer = props => {
  const { languageContext: lang } = useContext(languageContext);

  useEffect(() => {
    props.fetchHardcodedMovies();
    console.log('lang', lang.movie)
  }, [props.fetchHardcodedMovies]);

  return <Home movies={props.hardcodedMovies} history={props.history}/>;
};

const mapStateToProps = function(state) {
  return {
    hardcodedMovies: state.movies.hardcodedMovies
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchHardcodedMovies: () => dispatch(fetchHardcodedMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
