import React, { useContext } from "react";
import { languageContext } from "../../config/language";

export default ({ handleChange, handleSubmit, value }) => {
  const { languageContext: lang } = useContext(languageContext);

  return (
    <form className="form-inline container" onSubmit={handleSubmit}>
      <div class="row">
      <input
        className="form-control col-8"
        type="search"
        placeholder={`${lang.search}..`}
        aria-label={`${lang.search}..`}
        onChange={handleChange}
        value={value}
      />
      <button className="btn btn-success col-4" type="submit">
        {lang.search}
      </button>
      </div>
    </form>
  );
};
