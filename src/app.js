import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Cinema Hunt" });
});

import movieRouter from "./routes/movie.routes.js";

app.use("/api/v1/movie", movieRouter);

export default app;
