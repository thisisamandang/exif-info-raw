// imageService.ts

const exiftool = require("exiftool-vendored").exiftool;
import { ImageData, ExifInfo } from "../types";

export const getExifData = async (
  image: ImageData
): Promise<{ index: number; info: ExifInfo }> => {
  try {
    const tags = await exiftool.read(image.file);
    return {
      index: image.index,
      info: {
        Lens: tags.Lens,
        CaptureTime: tags.DateTimeOriginal?.rawValue || "",
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
  } catch (error) {
    console.error(`Error processing image metadata for ${image.file}:`, error);
    throw error;
  }
};
