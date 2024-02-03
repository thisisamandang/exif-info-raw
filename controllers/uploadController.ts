const exiftool = require("exiftool-vendored").exiftool;
import { ExifInfo } from "../types";
import ImageModel from "../model/imageModel";

export const uploadController = async (req: any, res: any) => {
  console.log(req.file, req.body);

  await exiftool.extractPreview(
    req.file.path,
    `./assets/${req.file.filename}.jpg`
  );

  const tags = await exiftool.read(req.file.path);
  const ImageData: {
    exifInfo: ExifInfo;
    fileInfo: { fileName: string; path: string; previewPath: string };
  } = {
    exifInfo: {
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
    fileInfo: {
      fileName: req.file.filename,
      path: req.file.path,
      previewPath: `./assets/${req.file.filename}.jpg`,
    },
  };
  // console.log(ImageData);
  try {
    const newImage = await ImageModel.create(ImageData);
    console.log("Data saved to database:", newImage);
    res.status(200).json({ imageId: newImage._id });
  } catch (error) {
    console.error("Error saving data to database:", error);
    res.status(500).send("Internal Server Error");
  }
};
