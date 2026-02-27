import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import beerRoutes from "./routes/beerroutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import breweryRoutes from "./routes/breweryRoutes.js";
import AdminRoutes from "./routes/AdminRoutes.js";
dotenv.config();

const app = express();

const isProd = process.env.NODE_ENV === "production"
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: isProd
      ? "https://beer-craft-perica-anics-projects.vercel.app"
      : "http://localhost:5173",
    credentials: true,
  }),
);
//http://localhost:5173
//a
app.use("/api/auth", authRoutes);
app.use("/api/beers", beerRoutes);
app.use("/api/brewery", breweryRoutes);
app.use("/api/admin", AdminRoutes);

const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running  on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
