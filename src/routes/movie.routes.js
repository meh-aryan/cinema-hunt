import { Router } from "express";
import * as movieController from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.get("/all", movieController.getMovieAll);
movieRouter.get("/:id", movieController.getMovieById);

movieRouter.post("/create", movieController.createMovie);
movieRouter.put("/:id", movieController.updateMovieById);
movieRouter.patch("/:id", movieController.updateMovieById);

movieRouter.delete("/:id", movieController.deleteMovieById);

export default movieRouter;
