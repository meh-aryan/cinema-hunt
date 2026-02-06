import * as movieService from "../services/movie.service.js";

const getMovieAll = async (req, res) => {};

const getMovieById = async (req, res) => {};

const createMovie = async (req, res) => {
  const movie = await movieService.createMovie(req.body);
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
