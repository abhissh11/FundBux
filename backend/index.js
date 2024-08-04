import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/auth-route.js";

dotenv.config();

const app = express();
app.use(express.json());
const allowedOrigins = ["http://localhost:3000", "https://fund-bux.vercel.app"];

app.use(
  cors({
    origin: "https://blogsphere-h6tw.onrender.com/",
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("mongodb connected!"))
  .catch((err) => console.log(err));

app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello from Fund Bux backend");
});

app.listen(4000, () => {
  console.log("Server running on Port: 4000");
});
