import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Navbar from "../components/Navbar";
import MoviesSearchResult from "../components/MoviesSearchResult";
import Movie from "../components/Movie";
import Home from "../components/Home";

const Routes = props => {
  return (
    <div>
      <Navbar />
      <div id="main-routes" className="container">
        <div className="row">
          <div className="col-12">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={MoviesSearchResult} />
              <Route path="/movies/:id" component={Movie} />
              <Redirect from="/" to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;
