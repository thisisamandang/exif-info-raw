// routes.ts
import express from "express";
import { getImagesWithExifData } from "../controllers/exifController";

const router = express.Router();

router.get("/", (req, res) => res.send("API Running"));
router.get("/exifinfo", getImagesWithExifData);

export default router;
