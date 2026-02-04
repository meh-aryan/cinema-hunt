import "dotenv/config";
import connectDB from "./config/db.js";
import app from "./src/app.js";

const HOSTNAME = process.env.HOSTNAME;
const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, HOSTNAME, () => {
      console.log(`Server is listening at ${HOSTNAME}:${PORT}`);
    });
  } catch (error) {}
};

startServer();
