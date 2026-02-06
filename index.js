import "dotenv/config";
import connectDB from "./config/db.js";
import app from "./src/app.js";

const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening at PORT:${PORT}`);
    });
  } catch (error) {
    console.error("Server connection failed", error);
    process.exit(1);
  }
};

startServer();
