import React from 'react';

export const languages = {
  en: {
    movie: 'Movie',
    category: 'Category',
    seeDetail: 'See Detail',
    omdb: 'omdb',
    search: 'Search',
    duration: 'Duration',
    genre: 'Genre',
    year: 'Year',
    plot: 'Plot',
    director: 'Director',
    actors: 'Actors',
    rating: 'Rating',
  },
  es: {
    movie: 'Pelicula',
    category: 'Categoría',
    seeDetail: 'Ver Detalle',
    omdb: 'omdb',
    search: 'Buscar',
    duration: 'Duración',
    genre: 'Genero',
    year: 'Año',
    plot: 'Trama',
    director: 'Director',
    actors: 'Actores',
    rating: 'Puntaje',
  },
};

export const languageContext = React.createContext(
  {languageContext: languages.es} // default value
);
