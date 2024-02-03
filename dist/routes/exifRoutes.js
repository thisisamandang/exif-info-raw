"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const exifController_1 = require("../controllers/exifController");
const uploadController_1 = require("../controllers/uploadController");
const uploadMulter_1 = require("../middleware/uploadMulter");
const getImageController_1 = require("../controllers/getImageController");
const router = express_1.default.Router();
router.get("/", (req, res) => res.send("API Running"));
router.get("/exifinfo", exifController_1.getImagesWithExifData);
router.post("/upload", uploadMulter_1.upload.single("image"), uploadController_1.uploadController);
router.get("/image/:id", getImageController_1.getImageController);
exports.default = router;
