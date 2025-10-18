import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);

const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(
        `🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};


startServer();

