import { connect } from "mongoose";

const connectDB = async () => {
  if (!process.env.DB_URI) {
    throw new Error("DB_URI is not defined in environment variables");
  }

  try {
    const conn = await connect(process.env.DB_URI, { autoIndex: true });
    const host = conn.connection.host;
    const port = conn.connection.port;
    console.log(`Database is connected at ${host}:${port}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
