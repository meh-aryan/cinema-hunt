import express from "express";

const app = express();

// Server Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Root Route Handler
app.get("/", (_req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Cinema Hunt",
    data: {},
  });
});

// Health Check Route Handler
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

// Route Imports
import movieRouter from "./routes/movie.routes.js";

// Route Declaration
app.use("/api/v1/movie", movieRouter);

// Global Error Handler
app.use((err, _req, res, _next) => {
  console.error(err);
  return res.status(500).json({
    success: false,
    type: "INTERNAL_SERVER_ERROR",
    message: err.message || "Internal Server Error",
    data: {},
  });
});

export default app;
