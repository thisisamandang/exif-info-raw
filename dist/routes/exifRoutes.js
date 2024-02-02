"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const exifController_1 = require("../controllers/exifController");
const multer = require("multer");
const upload = multer({ dest: "./assets" });
const uploadController_1 = require("../controllers/uploadController");
const router = express_1.default.Router();
router.get("/", (req, res) => res.send("API Running"));
router.get("/exifinfo", exifController_1.getImagesWithExifData);
router.post("/upload", upload.single("img"), uploadController_1.uploadController);
exports.default = router;