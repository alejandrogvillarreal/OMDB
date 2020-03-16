import React from "react";
import Movies from "../Movies";
import Carrousel from "../Carrousel";

export default (props) => {
  return (
    <div>
      <div className="container-fluid p-0">
        <Carrousel />
      </div>
      <Movies movies={props.movies}/>
    </div>
  );
};
