"use strict";
// imageService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExifData = void 0;
const exiftool = require("exiftool-vendored").exiftool;
const getExifData = async (image) => {
    var _a;
    try {
        const tags = await exiftool.read(image.file);
        return {
            index: image.index,
            info: {
                Lens: tags.Lens,
                CaptureTime: ((_a = tags.DateTimeOriginal) === null || _a === void 0 ? void 0 : _a.rawValue) || "",
                Speed: tags.ShutterSpeed,
                ISO: tags.ISO || 0,
                FileName: tags.FileName,
                Aperture: tags.ApertureValue,
                WhiteBalance: tags.WhiteBalance,
                ImageSize: tags.ImageSize,
                Camera: tags.CanonImageType,
                Rating: tags.Rating || 0,
            },
        };
    }
    catch (error) {
        console.error(`Error processing image metadata for ${image.file}:`, error);
        throw error;
    }
};
exports.getExifData = getExifData;
