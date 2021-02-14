let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 3,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 6,
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 9,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => person.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score,
  };

  movies.push(newMovie);

  return newMovie;
};
