// routes.ts
import express from "express";
import { getImagesWithExifData } from "../controllers/exifController";
import { uploadController } from "../controllers/uploadController";
import { upload } from "../middleware/uploadMulter";
import { getImageController } from "../controllers/getImageController";
const router = express.Router();

router.get("/", (req, res) => res.send("API Running"));
router.get("/exifinfo", getImagesWithExifData);
router.post("/upload", upload.single("image"), uploadController);
router.get("/image/:id", getImageController);
export default router;
