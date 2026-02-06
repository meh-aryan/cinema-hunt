import Movie from "../models/Movie.js";

const getMovieAll = async () => {};

const getMovieById = async () => {};

const createMovie = async (movieObject) => {
  const {
    name,
    description,
    genre,
    language,
    pictureQuality,
    durationMinutes,
    isReleased,
    releaseDate = null,
    cinemaRating,
    posterImageUrl,
    trailerUrl,
  } = movieObject;

  const movie = new Movie({
    name,
    description,
    genre,
    language,
    pictureQuality,
    durationMinutes,
    isReleased,
    releaseDate,
    cinemaRating,
    posterImageUrl,
    trailerUrl,
  });

  await movie.save();

  return movie;
};

const updateMovieById = async () => {};

const deleteMovieById = async () => {};

export {
  getMovieAll,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
