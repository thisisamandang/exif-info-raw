"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagesWithExifData = void 0;
const exifservice_1 = require("../service/exifservice");
const data_1 = require("../data");
const getImagesWithExifData = async (req, res) => {
    try {
        const imageResponses = await Promise.all(data_1.imageData.map(exifservice_1.getExifData));
        return res.json({ images: data_1.imageData, exifInfo: imageResponses });
    }
    catch (error) {
        console.error("Error processing image metadata:", error);
        return res.status(500).json({ error: "Error processing image metadata" });
    }
};
exports.getImagesWithExifData = getImagesWithExifData;
