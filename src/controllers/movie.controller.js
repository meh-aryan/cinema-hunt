import * as movieService from "../services/movie.service.js";
import CustomError from "../utils/CustomError.js";

const getMovieAll = async (req, res) => {};

const getMovieById = async (req, res) => {};

const createMovie = async (req, res) => {
  try {
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
    } = req.body;

    if (
      !name ||
      !description ||
      !genre ||
      !language ||
      !pictureQuality ||
      !durationMinutes ||
      !isReleased ||
      !cinemaRating ||
      !trailerUrl
    ) {
      throw new CustomError(
        "BAD_REQUEST_BODY",
        422,
        "Missing require body content",
      );
    }

    const movie = await movieService.createMovie(req.body);

    return res.status(201).json({
      success: true,
      message: "Movie added to database",
      data: movie,
    });
  } catch (error) {
    return res.status(error.code).json({
      success: false,
      type: error.name,
      message: error.message,
      data: error.data,
    });
  }
};

const updateMovieById = async (req, res) => {};

const deleteMovieById = async (req, res) => {};

export {
  getMovieAll,
  getMovieById,
  createMovie,
  updateMovieById,
  deleteMovieById,
};
