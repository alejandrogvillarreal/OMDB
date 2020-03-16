import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import Search from "../Search";

import { languageContext } from "../../config/language";

export default () => {
  const { languageContext: lang } = useContext(languageContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
      <Link className="navbar-brand" to={`/`}>
        {lang.omdb.toUpperCase()}
      </Link>

      <Route component={Search} />
    </nav>
  );
};
