"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes.ts
const express_1 = __importDefault(require("express"));
const exifController_1 = require("../controllers/exifController");
const router = express_1.default.Router();
router.get("/", (req, res) => res.send("API Running"));
router.get("/exifinfo", exifController_1.getImagesWithExifData);
exports.default = router;
