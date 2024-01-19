
import { Request, Response } from "express";
import { getExifData } from "../service/exifservice";
import { imageData } from "../data";

export const getImagesWithExifData = async (req: Request, res: Response) => {
  try {
    const imageResponses = await Promise.all(imageData.map(getExifData));
    return res.json({ images: imageData, exifInfo: imageResponses });
  } catch (error) {
    console.error("Error processing image metadata:", error);
    return res.status(500).json({ error: "Error processing image metadata" });
  }
};
