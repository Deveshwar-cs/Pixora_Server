import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import imageRoutes from "./routes/image.routes.js";
import connectDB from "./config/database.js";

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.get("api/health", (req, res) => {
  res.json({
    success: true,
    message: "Pixora api is running",
  });
});

app.use("/uploads", express.static("uploads"));
app.use("/api/images", imageRoutes);

app.listen(PORT, () => {
  console.log(`Pixora servern running on http://localhost:${PORT}`);
});
