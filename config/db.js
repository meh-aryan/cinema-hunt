import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(process.env.DB_URI);
    const host = conn.connection.host;
    const port = conn.connection.port;
    console.log(`Database is connected at ${host}:${port}`);
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
