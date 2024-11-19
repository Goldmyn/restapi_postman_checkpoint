import express from "express";

const app = express();
const port = 3000;
import userRoutes from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

app.use(express.json());
app.use("/api/v1", userRoutes);

// connect to mongoose database
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connection Successful");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, () => {
  connectDB();
});
