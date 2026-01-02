import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import beerRoutes from "./routes/beerroutes.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import breweryRoutes from "./routes/breweryRoutes.js"
import beerAdminRoutes from "./routes/beerAdminRoutes.js"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
})

app.use("/api/auth", authRoutes);
app.use("/api/beers", beerRoutes);
app.use("/api/brewery", breweryRoutes);
app.use("/api/admin", beerAdminRoutes);

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
