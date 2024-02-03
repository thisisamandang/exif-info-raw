// server.ts
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import routes from "./routes/exifRoutes";

const app = express();
app.use(cors());
app.use("/", routes);

const PORT = process.env.PORT || 8000;

const MONGO_URL = "mongodb://localhost:27017/filterpixel";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB Connection Sucessful");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
