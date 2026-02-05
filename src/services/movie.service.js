import Movie from "../models/Movie.js";
import CustomError from "../utils/CustomError.js";

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
    trailerUrl,
  } = movieObject;

  try {
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
      trailerUrl,
    });

    await movie.save();

    return movie;
  } catch (error) {
    throw new CustomError(
      "CANNOT_ADD_MOVIE",
      500,
      "There is an internal error while adding movie into database.",
      error,
    );
  }
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
