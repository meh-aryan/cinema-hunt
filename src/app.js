import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Cinema Hunt" });
});

export default app;
