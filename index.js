import "dotenv/config";
import connectDB from "./config/db.js";
import app from "./src/app.js";

const HOSTNAME = String(process.env.HOSTNAME);
const PORT = Number(process.env.PORT);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, HOSTNAME, () => {
      console.log(`Server is listening at ${HOSTNAME}:${PORT}`);
    });
  } catch (error) {
    console.log("Server connection failed", error);
    process.exit(1);
  }
};

startServer();
