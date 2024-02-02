import mongoose, { Schema } from "mongoose";
import { ExifInfo } from "../types";

const exifInfoSchema = new Schema<ExifInfo>({
  Lens: { type: String },
  CaptureTime: { type: String },
  Speed: { type: String },
  ISO: { type: Number },
  FileName: { type: String },
  Aperture: { type: String },
  WhiteBalance: { type: String },
  ImageSize: { type: String },
  Camera: { type: String },
  Rating: { type: Number },
});

const fileInfoSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  path: { type: String, required: true },
  previewPath: { type: String, required: true },
});

const combinedSchema = new mongoose.Schema({
  exifInfo: { type: exifInfoSchema, required: true },
  fileInfo: { type: fileInfoSchema, required: true },
});

const imageModel = mongoose.model("Image", combinedSchema);

export default imageModel;
