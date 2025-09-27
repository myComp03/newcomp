import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use("/api/users", userRoute);
app.use("/api/contact", contactRoutes);

// Serve frontend (Vite build)
app.use(express.static(path.join(__dirname, "dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});


const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`✅ Server running on port ${port}`));
  })
  .catch((err) => console.error("❌ DB connection failed:", err));
