// routes.ts
import express from "express";
import { getImagesWithExifData } from "../controllers/exifController";
const multer = require("multer");
const upload = multer({ dest: "./assets" });
import { uploadController } from "../controllers/uploadController";

const router = express.Router();

router.get("/", (req, res) => res.send("API Running"));
router.get("/exifinfo", getImagesWithExifData);
router.post("/upload", upload.single("img"), uploadController);

export default router;
